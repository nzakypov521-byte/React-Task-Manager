import styles from "../scss/TaskList.module.scss";
import TaskItem from "./TaskItem";
import type { Task } from "../types";
import TaskFilters from "./TaskFilters";
import { useState } from "react";

function TaskList({
  data,
  toggleData,
  deleteItem,
}: {
  data: Task[];
  toggleData: (id: number, status: boolean) => void;
  deleteItem: (id: number) => void;
}) {
  const [mode, setMode] = useState<string>("All");

  function changeMode(currentMode: string) {
    setMode(currentMode);
  }

  return (
    <div className={styles.mainBlock}>
      <div className={styles.nav}>
        <TaskFilters changeMode={changeMode}></TaskFilters>
      </div>
      <div className={styles.list}>
        {data
          .filter(
            (item) =>
              mode == "All" ||
              (mode === "Complete" ? item.completed : !item.completed),
          )
          .map((item) => (
            <TaskItem
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
              toggleData={toggleData}
              deleteItem={deleteItem}
            ></TaskItem>
          ))}
      </div>
    </div>
  );
}

export default TaskList;
