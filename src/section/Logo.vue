<script lang="ts" setup>
import { checkIfLocal } from "../utils/checkIfLocal";

const logoPath = checkIfLocal() ? "/logo.png" : "/logo.png";
</script>

<template>
  <div class="mt-4 flex w-fit items-center gap-4 p-2 shadow-lg rounded-lg">
    <div
      class="w-20 h-20 rounded-full flex justify-center items-center bg-primary p-2 overflow-hidden"
    >
      <img :src="logoPath" alt="logo" class="h-full w-full object-cover" />
    </div>
    <div>
      <h2 class="font-extrabold text-3xl">Quick</h2>
      <small class="text-slate-400">Todo App</small>
    </div>
  </div>
</template>
