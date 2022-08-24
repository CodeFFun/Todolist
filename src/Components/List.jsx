import {useContext} from 'react'
import {RiCloseFill} from 'react-icons/ri'
import {TiTick } from 'react-icons/ti'
import UserContext from '../Context/UserContext'

function List() {
  const { listData, setListData} = useContext(UserContext)

  const complete = (id) => { setListData(listData.filter((item) => item.id !== id))
  }

  

  const cancel = (id) => {
    setListData(listData.filter((item) => item.id !== id))
  }
  
  return (
    <div>
      <p className='task-statement'>Task to complete</p>
      <ul>
        {listData.map((item) => (
          <li key={item.id} >
            <div className="list-value">
            {item.listValue} 
            </div>
            <div className="icons">
              <TiTick className='done-icon icon' onClick={() => complete(item.id)}/>
              <RiCloseFill className='close-icon icon' onClick={() => cancel(item.id)}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List