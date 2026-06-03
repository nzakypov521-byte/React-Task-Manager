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
      <input
        type="checkbox"
        checked={props.completed}
        onChange={(e) => props.onToggle(props.id, e.target.checked)}
      />
      <div className={`${styles.text} ${props.completed ? styles.completed : ''}`}>{props.text}</div>
      <button onClick={() => props.onDelete(props.id)}>Удалить</button>
    </div>
  )
}

export default TaskItem
