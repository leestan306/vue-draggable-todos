<script lang="ts" setup>
import { ref } from "vue";

const active = ref(false);

const emit = defineEmits(["drop"]);

const drop = (e: Event) => {
  e.preventDefault();
  emit("drop");
  active.value = false;
};
</script>

<template>
  <div
    class="p-8 border-2 border-dotted rounded-lg border-red-400 h-40 slide"
    :class="{ 'bg-red-500 text-white h-40': active }"
    @dragenter="active = true"
    @dragleave="active = false"
    @dragover.prevent
    @drop="drop"
  >
    <div v-if="!active">
      <h2 class="font-bold text-3xl">Trash</h2>
      <p class="text-xs">Drop Here to Delete</p>
    </div>
  </div>
</template>
