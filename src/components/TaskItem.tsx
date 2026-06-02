import styles from '../scss/TaskItem.module.scss'

interface TaskItemType {
  id: number
  text: string
  completed: boolean
  onToggle: (id: number, mode: boolean) => void
  onDelete: (id: number) => void
}

function TaskItem(props: TaskItemType) {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.text}>{props.text}</div>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={(e) => props.onToggle(props.id, e.target.checked)}
        />
        <button onClick={() => props.onDelete(props.id)}>Удалить задачу</button>
      </div>
    </div>
  )
}

export default TaskItem
