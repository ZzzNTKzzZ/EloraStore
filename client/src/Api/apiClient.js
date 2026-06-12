export const BASE_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:5000/server"
  : "https://elora-store-chi.vercel.app/server";

export const getImageUrl = (imgUrl) => {
  if (!imgUrl) return "";
  if (imgUrl.startsWith("http://") || imgUrl.startsWith("https://") || imgUrl.startsWith("data:")) {
    return imgUrl;
  }
  return `${BASE_URL}${imgUrl}`;
};

export async function apiFetch(path, options = {}, signal = {}) {
  const opts = { ...options };
  const providedHeaders = opts.headers ? { ...opts.headers } : {};
  if (!(opts.body instanceof FormData)) {
    providedHeaders["Content-Type"] = providedHeaders["Content-Type"] || "application/json";
  } else {
    if (providedHeaders["Content-Type"]) delete providedHeaders["Content-Type"];
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    ...opts,
    headers: providedHeaders,
    ...signal,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "API error");
  }
  return data;
}

