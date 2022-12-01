import { ref } from 'vue'

const API_URL = 'http://localhost:3000/tasks'

const useTasks = () => {
  const tasks = ref([])

  const getTasks = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()

    if(data) {
      tasks.value = data
    }
  }

  const addTask = async (task) => {    
    await fetch(`${API_URL}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(task)
    })
  }

  const toggleTask = async (task) => {    
    await fetch(`${API_URL}/${task.id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify(task)
    })
  }

  const deleteTask = async (id) => {    
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
  }

  return { getTasks, tasks, toggleTask, deleteTask, addTask }
}

export default useTasks
