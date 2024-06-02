<script lang="ts" setup>
import { ref } from "vue";
defineProps<{
  open?: boolean;
}>();

const active = ref(false);
const emit = defineEmits(["drop"]);
</script>

<template>
  <div
    class="w-full max-w-80 dropArea overflow-hidden rounded flex items-center justify-center text-slate-400 duration-200 ease-in-out slide"
    :class="{
      'h-4': !active && !open,
      'h-40 shadow border-2 border-primary': active,
      'h-40 shadow border-2 border-primary bg-primary bg-opacity-5': open,
    }"
    @dragenter="active = true"
    @dragleave="active = false"
    @dragover.prevent
    @drop="
      (e) => {
        e.preventDefault();
        active = false;
        emit('drop');
      }
    "
  >
    <span v-if="open">Drop</span>
  </div>
</template>
