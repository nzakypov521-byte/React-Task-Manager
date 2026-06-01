import styles from "../scss/TaskItem.module.scss";

interface TaskItemType {
  id: number;
  text: string;
  completed: boolean;
  toggleData: (id: number, mode: boolean) => void;
  deleteItem: (id: number) => void;
}

function TaskItem(props: TaskItemType) {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.text}>{props.text}</div>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={(e) => props.toggleData(props.id, e.target.checked)}
        />
        <button onClick={() => props.deleteItem(props.id)}>Удалить задачу</button>
      </div>
    </div>
  );
}

export default TaskItem;
