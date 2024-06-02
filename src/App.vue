<script lang="ts" setup>
import { ref, computed, watch, onMounted } from "vue";
import NewTodo from "./NewTodo.vue";
import FilteredTodos from "./section/FilteredTodos.vue";
import DeleteDrop from "./section/DeleteDrop.vue";
import Logo from "./section/Logo.vue";
const addTodo = (todo: { name: string; category: string }) => {
  todos.value.push({
    ...todo,
    id: Date.now(),
    done: false,
  });
  // @ts-ignore
  document.getElementById("newTodoModal")?.close();
};
const todos = ref<Todo[]>([]);
watch(
  todos,
  (value) => {
    localStorage.setItem("todos", JSON.stringify(value));
  },
  { deep: true }
);
onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem("todos") || "[]");
});

const activeTodoOnDrag = ref<Todo | null>(null);
const inProgressTodos = computed(() =>
  todos.value.filter((todo) => !todo.done).sort((a, b) => b.id - a.id)
);
const completedTodos = computed(() =>
  todos.value.filter((todo) => todo.done).sort((a, b) => b.id - a.id)
);

const deleteTodo = (todo: Todo) => {
  todos.value.splice(
    todos.value.findIndex((t) => t.id === todo.id),
    1
  );
};
const drop = (done: boolean) => {
  // change the category of the active todo
  if (activeTodoOnDrag.value) {
    activeTodoOnDrag.value.done = done;
    todos.value.splice(
      todos.value.findIndex((todo) => todo.id === activeTodoOnDrag.value?.id),
      1,
      // @ts-ignore
      activeTodoOnDrag.value
    );
  }
};
const drag = (todo: Todo) => {
  activeTodoOnDrag.value = todo;
};
</script>

<template>
  <div
    class="h-[100dvh] w-full bg-primary p-4 flex justify-center items-center overflow-hidden"
  >
    <div
      class="max-w-4xl mx-auto gap-4 p-8 bg-white rounded-lg max-h-[90dvh] overflow-y-auto w-full"
    >
      <div class="my-8 grid md:grid-cols-2">
        <div class="flex gap-2 flex-col">
          <Logo />
          <button
            id="newTodoModaltoggle"
            class="btn btn-primary w-fit"
            onclick="newTodoModal.showModal()"
          >
            New Todo +
          </button>
        </div>

        <DeleteDrop
          @drop="() => deleteTodo(activeTodoOnDrag!)"
          v-if="todos.length > 0"
        />
      </div>

      <div class="">
        <NewTodo @addTodo="addTodo" />
        <div class="">
          <div class="grid md:grid-cols-2">
            <FilteredTodos
              :todos="inProgressTodos"
              :title="'In Progress'"
              @drop="() => drop(false)"
              @drag="drag"
              @delete="deleteTodo"
              :canDrop="todos.length ? true : false"
            />
            <FilteredTodos
              :todos="completedTodos"
              :title="'Completed'"
              @drag="drag"
              @drop="() => drop(true)"
              @delete="deleteTodo"
              :canDrop="todos.length ? true : false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
