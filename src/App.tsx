import { useEffect, useState } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import styles from './scss/App.module.scss'
import type { Task } from './types'
import TaskStats from './components/TaskStats'
import TaskFilters from './components/TaskFilters'
import type { Mode } from './types'

function App() {
  const [mode, setMode] = useState<Mode>('All')

  const [data, setData] = useState<Task[]>(() => {
    try {
      const saved = localStorage.getItem('tasks')
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      console.error(e)
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(data))
  }, [data])

  function addTask(text: string) {
    if (text.trim()) {
      const dataToSave = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
      }

      setData((prevData) => [...prevData, dataToSave])
    } else {
      alert('Заполните поле')
    }
  }

  function toggleTask(id: number, status: boolean) {
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, completed: status } : item)),
    )
  }

  function deleteItem(id: number) {
    setData((prevData) => prevData.filter((item) => item.id !== id))
  }

  function deleteCompletedTasks() {
    setData((prevData) => prevData.filter((item) => !item.completed))
  }

  function changeMode(currentMode: Mode) {
    setMode(currentMode)
  }

  return (
    <div className={styles.main}>
      <TaskForm onAddTask={addTask}></TaskForm>
      <div className={styles.list}>
        <TaskFilters mode={mode} changeMode={changeMode}></TaskFilters>
        <TaskList data={data} onToggle={toggleTask} onDelete={deleteItem} mode={mode}></TaskList>
      </div>

      <TaskStats deleteCompletedTasks={deleteCompletedTasks} data={data}></TaskStats>
    </div>
  )
}

export default App
