import express from "express";
import routerProduct from "./products.js";
import routerOrder from "./order.js"
import routerUser from "./user.js";
import routerCategory from "./category.js"
import routerCart from "./cart.js"

export default function routes(app) {
    app.get("/server", (req, res) => {
        res.render("home")
    })
    app.use("/server/products", routerProduct)
    app.use("/server/order", routerOrder)
    app.use("/server/user", routerUser)
    app.use("/server/category", routerCategory)
    app.use("/server/cart", routerCart)
} 