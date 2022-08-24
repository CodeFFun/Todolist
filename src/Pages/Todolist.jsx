import Search from '../Components/Search'
import List from '../Components/List'

function Todolist() {
  return (
    <div className="body">
        <div className='todo-list'>
            <Search />
            <List />
        </div>
    </div>
  )
}

export default Todolist