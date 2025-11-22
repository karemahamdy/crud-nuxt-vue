import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // JSON SERVER
  headers: { "Content-Type": "application/json" },
});

// ========== CRUD ==========

// Get all
export function getItems() {
  return api.get("/items");
}

// Add new
export function addItem(payload) {
  return api.post("/items", payload);
}

// Update
export function updateItem(id, payload) {
  return api.put(`/items/${id}`, payload);
}

// Delete
export function deleteItem(id) {
  return api.delete(`/items/${id}`);
}

export default api;
