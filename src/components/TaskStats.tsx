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
      <div className={styles.stats}>
        <div className={styles.tasksStat}>
          Всего:
          <div className={styles.tasksStatAmount}>
          {data.length}
          </div>
        </div>
        <div className={styles.tasksStat}>
          Выполнено:
          <div className={styles.tasksStatAmount}>
          {data.filter((item) => item.completed).length}
          </div>
        </div>
        <div className={styles.tasksStat}>
          Осталось:
          <div className={styles.tasksStatAmount}>
          {data.filter((item) => !item.completed).length}
          </div>
        </div>
      </div>
      <button onClick={deleteCompletedTasks}>Удалить выполненные</button>
    </div>
  )
}

export default TaskStats
