import styles from '../scss/TaskForm.module.scss'
import { useState } from 'react'

function TaskForm({ onAddTask }: { onAddTask: (text: string) => void }) {
  const [text, setText] = useState<string>('')

  return (
    <form
      className={styles.mainBlock}
      onSubmit={(e) => {
        e.preventDefault()
        onAddTask(text)
        setText('')
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новая задача"
        required
      />
      <button>Добавить</button>
    </form>
  )
}

export default TaskForm
