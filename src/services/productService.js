import api from "../api/api";

const baseUrl = "https://";
export const endpoints = {
  products: "/products",
};

const getPage = (page = 1) => {
  let url = baseUrl + endpoints.products;
  if (page) url += `/?page=${page}`;
  return api.get(url);
};

const productService = {
  getPage,
};

export default productService;
