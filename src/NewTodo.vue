<script lang="ts" setup>
import { ref } from "vue";
const emits = defineEmits(["addTodo"]);
const submit = (e: Event) => {
  e.preventDefault();
  emits("addTodo", todo.value);
  todo.value = {
    name: "",
    category: "",
  };
};

const todo = ref({
  name: "",
  category: "",
});
</script>

<template>
  <dialog id="newTodoModal" class="modal">
    <div class="modal-box">
      <div class="rounded shadow-md p-8 grid gap-4 my-4 w-full">
        <form class="grid gap-4" @submit="submit">
          <div>
            <small class="label">Todo</small>
            <input
              type="text"
              placeholder="What needs to be done?"
              class="input input-bordered w-full"
              v-model="todo.name"
            />
          </div>
          <div>
            <small class="label">Category</small>
            <!-- <select name="" id="">
              <option value="Work">Work</option>
              <option value="School">School</option>
              <option value="Work">Work</option>
            </select> -->
            <input
              type="text"
              placeholder="Category name"
              class="input input-bordered w-full"
              v-model="todo.category"
            />
          </div>

          <button class="btn btn-primary">save</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
