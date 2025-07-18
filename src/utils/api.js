import axios from "axios";

// kullanıcağımız api'a göre axios'u özelleştirelim
// api'ın temel adresi
// api isteklerinde gönderilmesi gereken headerlar
const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
  params: {
    geo: "TR",
    lang: "tr",
  },
});

export default api;
