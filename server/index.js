import express, { json } from "express";
import dotenv from "dotenv";
import routes from "./Routes/index.js";
import { engine } from "express-handlebars";
import connectDB from "./db.js";
import cors from "cors";
import multer from "multer";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { onRequest } from "firebase-functions/v2/https";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  }),
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "100kb" }));

// Serve static uploads under /server/uploads
app.use("/server/uploads", express.static("uploads"));
if (process.env.FIREBASE_CONFIG || process.env.FUNCTIONS_EMULATOR || process.env.VERCEL) {
  app.use("/server/uploads", express.static("/tmp/uploads"));
}

// basic rate limiter
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 200 });
app.use(limiter);
app.engine("handlebars", engine());
app.set("view engine", "hbs");
app.set("views", "./views");

// Routes
routes(app);

connectDB();

// Export the cloud function
export const server = onRequest({ cors: true, maxInstances: 10 }, app);

// Run local listener only in dev
if (!process.env.FIREBASE_CONFIG && !process.env.FUNCTIONS_EMULATOR && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
  });
}

export default app;

