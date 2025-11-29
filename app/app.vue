<template>
  <div class=" container mx-auto min-h-screen px-4 py-6">
    <NuxtRouteAnnouncer />
     <NuxtPage />
     <!-- خلفية -->
<div class="bg-primary-700 text-white p-4 rounded">Button</div>

<!-- نص بلون رمادي -->
<p class="text-grey-800">Description</p>

<!-- بوردر -->
<input class="border border-grey-300 p-2 rounded" />

<!-- حالات success / danger -->
<span class="bg-success-100 text-success-700 px-2 py-1 rounded">Success</span>
<button class="bg-danger-500 text-white px-4 py-2 rounded">Delete</button>

  </div>
</template>
<style>
@import "~/assets/css/tailwind.css";
</style>