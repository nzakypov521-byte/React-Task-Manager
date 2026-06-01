import { useEffect, useState } from 'react'
// import TaskFilters from "./components/TaskFilters"
// import TaskStats from "./components/TaskStats"
import TaskList from "./components/TaskList"
// import TaskItem from "./components/TaskItem"
import TaskForm from "./components/TaskForm"
import styles from "./scss/App.module.scss"
import "./App.css"

function App() {
  const [data, setData] = useState([{
    id: Date.now(),
    text: 'Тест',
    completed: true,
  }])

  function getTask(text) {
    if (text.replaceAll(' ', '')) {
      const dataToSave = {
        id: Date.now(),
        text: text,
        completed: false,
      }
  
      setData([...data, dataToSave])
      console.log(data);
    } else {
      alert('Заполните поле')
    }
  }

  function ToggleData(id, status) {
    setData(prevData => 
      prevData.map((item) => item.id === id ? {...item, completed: status} : item)
    )
  }

  return (
    <div className={styles.main}>
      <TaskForm cb={getTask}></TaskForm>
      <TaskList data={data} toggleData={ToggleData}></TaskList>
    </div>
  )
}

export default App