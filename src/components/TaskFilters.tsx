import styles from "../scss/TaskFilters.module.scss";

function TaskFilters({
  changeMode,
}: {
  changeMode: (currentMode: string) => void;
}) {
  return (
    <div className={styles.mainBlock}>
      <button onClick={() => changeMode("All")}>Все</button>
      <button onClick={() => changeMode("Complete")}>Выполненные</button>
      <button onClick={() => changeMode("Uncomplete")}>Невыполненные</button>
    </div>
  );
}

export default TaskFilters;
