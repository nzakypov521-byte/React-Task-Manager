import styles from "../scss/TaskList.module.scss";
import TaskItem from "./TaskItem";
import type { Task } from "../types";

function TaskList({
  data,
  toggleData,
  deleteItem,
}: {
  data: Task[];
  toggleData: (id: number, status: boolean) => void;
  deleteItem: (id: number) => void;
}) {
  return (
    <div className={styles.mainBlock}>
      {data.map((item) => (
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
  );
}

export default TaskList;
