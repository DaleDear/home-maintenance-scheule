import { useEffect, useState } from "react"
import { getAllUsers } from "../../services/userService"
import { User } from "./User"
import { Link } from "react-router-dom"

export const UserList = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        getAllUsers().then(userArray => {
    setUsers(userArray)
})
    }, [])

return (
  <div className="employees">
    {users.map((userObj) => {
      return (
        <Link to={`/users/${userObj.id}`} key={userObj.id}>
          <User user={userObj} key={userObj.id} />
        </Link>
      )
    })}
  </div>
)

}

