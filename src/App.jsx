import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const [inputTask, setInputTask] = useState()
  
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const handleInput = (e) => {
    setInputTask(e.target.value)
  }

  const handleSubmit = () => {
    dispatch({
      type: 'ADD_TASK',
      payload: inputTask,
    })
  }

  const handleRemove = (task) => {
    dispatch({
      type: 'REMOVE_TASK',
      payload: task,
    })
  }

  return (
    <>
      <ul>
        { 
          tasks.map((task) =>
            <li key={task}>
              {task} - <button onClick={() => handleRemove(task)}>Remove</button>
            </li>
          ) 
        }
      </ul>
      <input type="text" onChange={handleInput} value={inputTask} />
      <button type="submit" onClick={handleSubmit}>Add Task</button>
    </>
  )
}

export default App
