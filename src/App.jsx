import {useState} from 'react'
import { Header } from "./components/Header"
import { Search } from "./components/Search"
import { Todo } from "./components/Todo"

function App() {

  const [tasks, setTasks] = useState([]);

  function onDelete (deleteTask){
    setTasks(tasks.filter((task) => task!== deleteTask))
  }

  return (
    <>
    <Header />
    <div className="mt">
      <Search setTasks={setTasks} tasks={tasks} />
    </div>
    <Todo tasks={tasks} onDelete={onDelete} />
    </>
  )
}

export default App
