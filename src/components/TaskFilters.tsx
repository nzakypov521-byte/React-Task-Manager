import styles from '../scss/TaskFilters.module.scss'
import type { Mode } from '../types'

function TaskFilters({
  changeMode,
  mode,
}: {
  changeMode: (currentMode: Mode) => void
  mode: Mode
}) {
  return (
    <div className={styles.mainBlock}>
      <button
        className={`${mode === 'All' ? styles.active : ''}`}
        onClick={() => changeMode('All')}
      >
        Все
      </button>
      <button className={`${mode === 'Completed' ? styles.active : ''}`} onClick={() => changeMode('Completed')}>Выполненные</button>
      <button className={`${mode === 'Active' ? styles.active : ''}`} onClick={() => changeMode('Active')}>Активные</button>
    </div>
  )
}

export default TaskFilters
