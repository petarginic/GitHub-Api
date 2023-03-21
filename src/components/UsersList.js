import React from 'react'

const UsersList = ({users}) => {
  return (
    <div className='user-list '>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <a href={user.html_url} target="_blank" rel="noreferrer" style={{cursor: "pointer"}}>
              <img src={user.avatar_url}  className="rounded-circle mb-3" style={{width: "50px"}}
              alt="Avatar" />
            </a>

          <h5 className="mb-2"><strong>{user.login}</strong></h5>
          <hr/>
          </div>
        )
      })}
    </div>
  )
}

export default UsersList