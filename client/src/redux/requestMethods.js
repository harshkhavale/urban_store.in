import axios from "axios";
const BASE_URL = "https://urban-store-amckr84qc-harshkhavale.vercel.app/api";

// const TOKEN = "ujwdjwojdowwq";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
//   header: {
//     token: `Bearer ${TOKEN}`,
//   },
});
