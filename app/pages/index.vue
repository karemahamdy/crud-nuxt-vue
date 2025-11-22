<template>
  <div class="container">
    <h1>Nuxt 3 CRUD (Front-End Only)</h1>

    <!-- Create Form -->
    <form @submit.prevent="addItem" class="form">
      <input v-model="form.name" placeholder="Name" required />
      <input v-model="form.description" placeholder="Description" />
      <button type="submit">Add</button>
      <button type="button" @click="resetForm">Clear</button>
    </form>

    <!-- Table -->
    <table border="1" cellpadding="6" cellspacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>

          <!-- Name -->
          <td v-if="editingId !== item.id">{{ item.name }}</td>
          <td v-else>
            <input v-model="editForm.name" />
          </td>

          <!-- Description -->
          <td v-if="editingId !== item.id">{{ item.description }}</td>
          <td v-else>
            <input v-model="editForm.description" />
          </td>

          <td>
            <button v-if="editingId !== item.id" @click="startEdit(item)">Edit</button>
            <button v-else @click="saveEdit(item.id)">Save</button>

            <button v-if="editingId === item.id" @click="cancelEdit">Cancel</button>

            <button @click="deleteItem(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  { id: 1, name: "Item A", description: "First item" },
  { id: 2, name: "Item B", description: "Second item" },
]);

const nextId = ref(3);

const form = ref({ name: "", description: "" });

const editingId = ref(null);
const editForm = ref({ name: "", description: "" });

// CREATE
function addItem() {
  items.value.push({
    id: nextId.value++,
    name: form.value.name,
    description: form.value.description,
  });

  resetForm();
}

function resetForm() {
  form.value = { name: "", description: "" };
}

// EDIT
function startEdit(item) {
  editingId.value = item.id;
  editForm.value = { name: item.name, description: item.description };
}

function saveEdit(id) {
  const index = items.value.findIndex((i) => i.id === id);
  if (index !== -1) {
    items.value[index] = { id, ...editForm.value };
  }
  editingId.value = null;
}

function cancelEdit() {
  editingId.value = null;
}

// DELETE
function deleteItem(id) {
  items.value = items.value.filter((i) => i.id !== id);
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  font-family: sans-serif;
}
.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
input {
  padding: 6px;
}
button {
  padding: 6px 10px;
  cursor: pointer;
}
table {
  width: 100%;
}
</style>
