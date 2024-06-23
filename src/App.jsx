import {useState} from 'react'
import { Header } from "./components/Header"
import { Search } from "./components/Search"
import { Todo } from "./components/Todo"

function App() {

  const [tasks, setTasks] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [countTasksCompleted, setCountTasksCompleted] = useState(0);

  function onDelete (deleteTask){
    setTasks(tasks.filter((task) => task!== deleteTask))
  }

    function handleCheck(task){
        setIsChecked(task)
        setCountTasksCompleted(countTasksCompleted + ( isChecked ? -1 : 1)  )
    }

  return (
    <>
    <Header />
    <div className="mt">
      <Search setTasks={setTasks} tasks={tasks} />
    </div>
    <Todo tasks={tasks} onDelete={onDelete} isChecked={isChecked} handleCheck={handleCheck} countTasksCompleted={countTasksCompleted} />
    </>
  )
}

export default App
