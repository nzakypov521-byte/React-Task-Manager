import styles from "../scss/TaskItem.module.scss";

function TaskItem(props) {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.text}>{props.text}</div>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={(e) => props.cb(props.id, e.target.checked)}
        />
      </div>
    </div>
  );
}

export default TaskItem;
