import {useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import UserContext from '../Context/UserContext'


function Search() {
  
  const {listData, setListData, data, setData} = useContext(UserContext) 

  const onChange = (e) => {
    
    setData({
     id: uuidv4(),
     formData: e.target.value
    })
  }

const onClick = () =>{
  setListData([...listData, {id: data.id, listValue: data.formData}])
  setData({formData: ''})
}

  return (
    <div className='search-space'>
        <input type="text" value={data.formData} className="todo-search"  onChange={onChange}/>
        <button className='btn' onClick={onClick}>Set Task</button>
    </div>
  )
}

export default Search