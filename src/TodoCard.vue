<script lang="ts" setup>
import DropArea from "./section/DropArea.vue";
defineProps<{
  todo: Todo;
}>();

const emit = defineEmits(["drop", "drag", "delete"]);
</script>

<template>
  <div
    class="shadow p-8 rounded-lg grid gap-4 my-2 min-w-80 max-w-80 draggable slide relative"
    draggable="true"
    @dragstart="emit('drag', todo)"
  >
    <div
      class="w-fit py-2 px-4 bg-primary bg-opacity-10 text-primary rounded-lg"
    >
      {{ todo?.category }}
    </div>
    <div>
      {{ todo?.name }}
    </div>
    <button
      class="btn btn-circle btn-primary text-white absolute bottom-8 right-8"
      @click="emit('delete', todo)"
    >
      x
    </button>
  </div>
  <DropArea @drop="emit('drop')" />
</template>

<style scoped>
.draggable:hover {
  cursor: move;
}

.draggable:active {
  cursor: grabbing;
  border: 1px solid blue;
}
</style>
