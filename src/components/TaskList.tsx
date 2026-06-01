import styles from "../scss/TaskList.module.scss";
import TaskItem from "./TaskItem";
import type { Task } from "../types"

function TaskList({
  data,
  toggleData,
}: {
  data: Task[];
  toggleData: (id: number, status: boolean) => void;
}) {
  return (
    <div className={styles.mainBlock}>
      {data.map((item) => (
        <TaskItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
          cb={toggleData}
        ></TaskItem>
      ))}
    </div>
  );
}

export default TaskList;
