import { api } from "~/utils/api";

export const getItems = () => api.get("/items");
export const addItem   = (payload) => api.post("/items", payload);
export const updateItem = (id, payload) => api.put(`/items/${id}`, payload);
export const deleteItem = (id) => api.delete(`/items/${id}`)
