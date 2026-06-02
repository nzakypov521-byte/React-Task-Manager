import styles from '../scss/TaskStats.module.scss'
import type { Task } from '../types'

function TaskStats({
  deleteCompletedTasks,
  data,
}: {
  deleteCompletedTasks: () => void
  data: Task[]
}) {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.completeTasks}>
        Выполнено задач:
        {data.filter((item) => item.completed).length}
      </div>
      <div className={styles.unCompleteTasks}>
        Невыполнено задач:
        {data.filter((item) => !item.completed).length}
      </div>
      <div className={styles.allTasks}>
        Общее кол-во задач:
        {data.length}
      </div>
      <button onClick={deleteCompletedTasks}>Удалить выполненные задачи</button>
    </div>
  )
}

export default TaskStats
