<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useTasks from '../hooks/useTasks';
import AddTaskForm from './AddTaskForm.vue';
import TaskItem from './TaskItem.vue';
import Button from './Button.vue'

const { getTasks, tasks, deleteTask, toggleTask, addTask } = useTasks()
const isAddTask = ref(false)
const router = useRouter()

getTasks()

const goTo = () => router.push('/about')

const handleShowForm = () => {
  isAddTask.value = !isAddTask.value
}

const handleToggleTask = (task) => {
  task.completed = !task.completed
  toggleTask(task)
}

const handleDeleteTask = (id) => {
  deleteTask(id)
  tasks.value = tasks.value.filter(t => t.id !== id)
}

const handleSubmit = (task) => {
  addTask(task)
  tasks.value = [...tasks.value, task]
  isAddTask.value = false
}

</script>

<template>
  <div class="task-list-btns">
    <Button 
      v-if="!isAddTask"
      @onEmitClick="handleShowForm"
      text="Add" 
      color="green" 
    />
    <Button 
      v-if="isAddTask"
      @onEmitClick="handleShowForm"
      text="Close" 
      color="red" 
    />
    <Button 
      @onEmitClick="goTo('about')"
      text="About" 
      color="gray" 
    />
  </div>

  <AddTaskForm 
    v-if="isAddTask"
    @onEmitSubmit="handleSubmit" 
  />
  <div class="task-list">
    <TaskItem 
      v-for="task in tasks" 
      :key="task.id" 
      :task="task" 
      @onEmitDeleteTask="handleDeleteTask"
      @onEmitToggleTask="handleToggleTask"
    />
  </div>
</template>

<style>
.task-list-btns {
  display: flex;
  justify-content: space-between;
}
.task-list {
  display: flex;
  flex-flow: column;
  gap: 5px;
}
</style>
