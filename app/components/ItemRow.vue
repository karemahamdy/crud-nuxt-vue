<template>
  <div class="flex items-center">
    <div class="flex gap-2">
      <Button label="Edit" size="small" @click="startEdit" />
      <Button label="Delete" size="small" severity="danger" @click="emit('delete', item.id)" />
    </div>

    <!-- Edit Dialog -->
    <Dialog v-model:visible="visible" header="Edit Item" :modal="true">
      <div class="flex flex-col gap-3">
        <InputText v-model="editForm.name" placeholder="Name" />
        <InputText v-model="editForm.description" placeholder="Description" />
        <Button label="Save" @click="save" />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({ item: Object });
const emit = defineEmits(["update", "delete"]);

const visible = ref(false);
const editForm = ref({ name: "", description: "" });

function startEdit() {
  editForm.value = { ...props.item };
  visible.value = true;
}

function save() {
  emit("update", props.item.id, editForm.value);
  visible.value = false;
}
</script>
