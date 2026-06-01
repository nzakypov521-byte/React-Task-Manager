import styles from "../scss/TaskForm.module.scss"
import { useState } from "react"

function TaskForm({cb}) {
    const [text, setText] = useState('')

    return (
        <div className={styles.mainBlock}>
            <input type="text" value={text} onChange={(e) => (setText(e.target.value))} required/>
            <button onClick={() => {cb(text)
            setText('')
            }}>Добавить</button>
        </div>
    )
}

export default TaskForm