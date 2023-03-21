import React, { useState } from 'react'
import SearchUser from './SearchUser'
import UsersList from './UsersList'

const Users = () => {

    const [users, setUsers] = useState([]);
    const [value, setValue] = useState("")

    const fetchData  = async () => {
        if(value) {
            try {
                const response = await fetch(`https://api.github.com/search/users?q=${value}`);
                const data = await response.json();
                setUsers(data.items)
                setValue("")
                console.log(data.items)
            }
            catch (e) {
                console.log(e)
            }
        }
    }
    
    const handleOnChange = (text) => {
        setValue(text)
    }

    return (
        <div className='search-box shadow '>
            <SearchUser value={value} changeValue={handleOnChange} fetchData={fetchData} />
            <UsersList users={users}/>
        </div>
    )
}

export default Users