import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import styles from "./scss/App.module.scss";
import type { Task } from "./types";
import TaskStats from "./components/TaskStats";

function App() {
  const [data, setData] = useState<Task[]>([
    {
      id: 1,
      text: "Тест",
      completed: true,
    },
  ]);

  function getTask(text: string) {
    if (text.replaceAll(" ", "")) {
      const dataToSave = {
        id: Date.now(),
        text: text,
        completed: false,
      };

      setData([...data, dataToSave]);
    } else {
      alert("Заполните поле");
    }
  }

  function ToggleData(id: number, status: boolean) {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, completed: status } : item,
      ),
    );
  }

  function deleteItem(id: number) {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }

  function deleteCompletedTasks() {
    setData((prevData) => prevData.filter((item) => !item.completed));
  }

  return (
    <div className={styles.main}>
      <TaskForm cb={getTask}></TaskForm>

      <TaskList
        data={data}
        toggleData={ToggleData}
        deleteItem={deleteItem}
      ></TaskList>

      <TaskStats
        deleteCompletedTasks={deleteCompletedTasks}
        data={data}
      ></TaskStats>
    </div>
  );
}

export default App;
