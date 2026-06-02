import styles from '../scss/TaskFilters.module.scss'
import type { Mode } from '../types'

function TaskFilters({ changeMode }: { changeMode: (currentMode: Mode) => void }) {
  return (
    <div className={styles.mainBlock}>
      <button onClick={() => changeMode('All')}>Все</button>
      <button onClick={() => changeMode('Completed')}>Выполненные</button>
      <button onClick={() => changeMode('Active')}>Активные</button>
    </div>
  )
}

export default TaskFilters
