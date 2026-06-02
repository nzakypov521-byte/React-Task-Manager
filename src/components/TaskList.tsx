import styles from '../scss/TaskList.module.scss'
import TaskItem from './TaskItem'
import type { Task } from '../types'
import type { Mode } from '../types'

function TaskList({
  data,
  onToggle,
  onDelete,
  mode,
}: {
  data: Task[]
  onToggle: (id: number, status: boolean) => void
  onDelete: (id: number) => void
  mode: Mode
}) {
  return (
    <div className={styles.mainBlock}>
      {data
        .filter(
          (item) => mode === 'All' || (mode === 'Completed' ? item.completed : !item.completed),
        )
        .map((item) => (
          <TaskItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
            onToggle={onToggle}
            onDelete={onDelete}
          ></TaskItem>
        ))}
    </div>
  )
}

export default TaskList
