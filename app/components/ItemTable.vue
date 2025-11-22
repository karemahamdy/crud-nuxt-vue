<template>
  <DataTable :value="items" class="shadow-lg rounded-md w-full">
    <Column field="id" header="ID" />
    <Column field="name" header="Name" />
    <Column field="description" header="Description" />
    <Column header="Actions">
      <template #body="slotProps">
        <ItemRow
          :item="slotProps.data"
          @update="emit('update', $event[0], $event[1])"
          @delete="emit('delete', $event)"
        />
      </template>
    </Column>
  </DataTable>
</template>

<script setup>
import ItemRow from "./ItemRow.vue";

const props = defineProps({ items: Array });
const emit = defineEmits(["update", "delete"]);
</script>
