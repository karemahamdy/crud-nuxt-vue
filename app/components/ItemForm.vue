<template>
  <div class="p-4 bg-white rounded-xl shadow mb-6 flex gap-4 items-center">
    <InputText
      v-model="localForm.name"
      placeholder="Name"
      class="w-40"
    />

    <InputText
      v-model="localForm.description"
      placeholder="Description"
      class="w-60"
    />

    <Button label="Add" @click="submit" />
    <Button label="Clear" severity="secondary" @click="reset" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["add"]);
const localForm = ref({ name: "", description: "" });

function submit() {
  if (!localForm.value.name.trim()) return;
  emit("add", localForm.value);
  reset();
}

function reset() {
  localForm.value = { name: "", description: "" };
}
</script>
