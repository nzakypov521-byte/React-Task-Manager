import styles from "../scss/TaskList.module.scss";
import TaskItem from "./TaskItem";
import type { Task } from "../types";
import type { Mode } from "../types";

function TaskList({
  data,
  toggleData,
  deleteItem,
  mode,
}: {
  data: Task[];
  toggleData: (id: number, status: boolean) => void;
  deleteItem: (id: number) => void;
  mode: Mode;
}) {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.list}>
        {data
          .filter(
            (item) =>
              mode == "All" ||
              (mode === "Completed" ? item.completed : !item.completed),
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
