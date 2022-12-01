<script setup>

import { ref } from 'vue';

const emits = defineEmits(['onEmitSubmit'])

const name = ref('')
const date = ref('')
const completed = ref(false)

const onEmitSubmit = () => {
  if(!name.value) return

  const task = {
    id: Date.now(),
    name: name.value,
    date: date.value,
    completed: completed.value
  }  
  
  emits('onEmitSubmit', task)

  name.value = ''
  date.value = ''
  completed.value = false
}

</script>

<template>
  <form @submit.prevent="onEmitSubmit" class="add-task-form">
    <input type="text" placeholder="Name" v-model="name">
    <input type="date" placeholder="Date" v-model="date">

    <label for="completed">Completed</label>
    <input type="checkbox" id="completed" v-model="completed">
    
    <input type="submit" value="Submit">
  </form>
</template>

<style>
.add-task-form {
  text-align: left;
  margin-bottom: 15px;
}
.add-task-form input {
  display: block;
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.add-task-form label {
  background-color: gray;
  color: white;
  padding: 3px 8px;
  border-radius: 5px;
  font-size: .9rem;
}
.add-task-form input[type="checkbox"] {
  width: 30px;
  display: inline-block;
}
.add-task-form input[type="submit"] {
  background-color: #4f4fff;
  border: none;
  margin-top: 5px;
  color: white;
  cursor: pointer;
  padding: 7px;
}
</style>
