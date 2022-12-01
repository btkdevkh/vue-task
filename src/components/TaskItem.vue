<script setup>
import { computed } from 'vue';

const props = defineProps({ task: Object })
const { task } = props
const emits = defineEmits(['onEmitDeleteTask', 'onEmitToggleTask'])

const onEmitToggleTask = (task) => emits('onEmitToggleTask', task)
const onEmitDeleteTask = (id) => emits('onEmitDeleteTask', id)

const formatDate = computed(() => {
  const date = new Date(task.date)
  const stringDateArr = date.toString().split(' ')
  return `${stringDateArr[2]} ${stringDateArr[1]} ${stringDateArr[3]}`
})
</script>

<template>
  <div class="task-item" :class="task.completed && 'completed'">
    <router-link to="#">
      <strong>{{ task.name }}</strong> | <small>{{ formatDate }}</small>
    </router-link>
    <div class="buttons">
      <button 
        class="btn-update" 
        :class="task.completed && 'completed-btn'"
        @click="onEmitToggleTask(task)"
      >&#10003;</button>
      <button 
        class="btn-delete" 
        @click="onEmitDeleteTask(task.id)"
      >x</button>
    </div>
  </div>
</template>

<style>
.task-item {
  background-color: #f2f2f2;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
}
.task-item a {
  display: block;
  text-decoration: none;
  color: #000;
}
.buttons {
  display: flex;
  gap: 10px;
}
.buttons button {
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
}
.btn-update {
  background-color: orange;
}
.btn-delete {
  background-color: red;
}
.completed {
  border-left: 8px solid green;
}
.completed-btn {
  background-color: green;
  color: white;
}
</style>
