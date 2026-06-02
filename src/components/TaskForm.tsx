import styles from "../scss/TaskForm.module.scss";
import { useState } from "react";

function TaskForm({ cb }: { cb: (text: string) => void }) {
  const [text, setText] = useState<string>("");

  return (
    <form
      className={styles.mainBlock}
      onSubmit={(e) => {
        e.preventDefault();
        cb(text);
        setText("");
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Описание задачи"
        required
      />
      <button>Добавить</button>
    </form>
  );
}

export default TaskForm;
