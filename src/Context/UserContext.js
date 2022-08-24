import {createContext, useState} from 'react'

export const  UserContext = createContext()

export const UserProvider = ({children}) => {

    const [data, setData] = useState({
        id: '',
        formData: '',
    })
    
    const [listData, setListData] = useState([
        {
            id: 1,
            listValue: 'Walk your dog',
        },
        {
            id: 2,
            listValue:'Go running',
        },
        {
            id: 3,
            listValue: 'Go to sleep'
        }
    ]
)
    
    return <UserContext.Provider value={{
        data,
        listData,
        setData,
        setListData,
    }}>
        {children}
    </UserContext.Provider>
    
}

export default UserContext



