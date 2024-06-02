<script lang="ts" setup>
import TodoCard from "../TodoCard.vue";
import DropArea from "./DropArea.vue";
defineProps<{
  title: string;
  todos: Todo[];
  canDrop?: boolean;
}>();

const emit = defineEmits(["drop", "drag", "delete"]);
</script>

<template>
  <div>
    <div class="text-3xl font-bold text-slate-400">
      {{ title }}:
      <span class="text-black">
        {{ todos.length }}
      </span>
    </div>
    <DropArea
      @drop="emit('drop', title)"
      :open="(todos.length == 0 ? true : false) && canDrop"
    />
    <div v-for="todo in todos" :key="todo.id">
      <TodoCard
        :todo="todo"
        @drop="emit('drop')"
        @drag="emit('drag', $event)"
        @delete="emit('delete', $event)"
      />
    </div>
  </div>
</template>
