import { ref } from "vue";

export function useItems() {
  const items = ref([
    { id: 1, name: "Item A", description: "First item" },
    { id: 2, name: "Item B", description: "Second item" },
  ]);

  const nextId = ref(3);

  function addItem(data) {
    items.value.push({ id: nextId.value++, ...data });
  }

  function updateItem(id, updated) {
    const index = items.value.findIndex((i) => i.id === id);
    if (index !== -1) items.value[index] = { id, ...updated };
  }

  function deleteItem(id) {
    items.value = items.value.filter((i) => i.id !== id);
  }

  return { items, addItem, updateItem, deleteItem };
}
