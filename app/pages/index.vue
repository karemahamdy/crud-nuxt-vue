<template>
  <div class="max-w-4xl mx-auto py-10 px-4 bg-white shadow-md rounded-md flex flex-col justify-center items-center mt-40">
    <h1 class="text-3xl font-bold mb-6 text-center ">Nuxt 3 CRUD — Tailwind + PrimeVue</h1>

    <ItemForm @add="addItem" />

    <ItemTable
      :items="items"
      @update="updateItem"
      @delete="deleteItem"
    />
  </div>
</template>

<script setup>
import { useItems } from "~/composables/useItems";
import ItemForm from "~/components/ItemForm.vue";
import ItemTable from "~/components/ItemTable.vue";

const { items, addItem, updateItem, deleteItem } = useItems();
</script>
