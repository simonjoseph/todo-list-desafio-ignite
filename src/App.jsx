import { Header } from "./components/Header"
import { Search } from "./components/Search"
import { Todo } from "./components/Todo"

function App() {

  return (
    <>
    <Header />
    <div className="mt">
      <Search />
    </div>
    <Todo />
    </>
  )
}

export default App
