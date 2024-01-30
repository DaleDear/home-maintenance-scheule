import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserWithProperties } from "../../services/propertyService"
import "./User.css"

export const UserDetails = () => {
    const [user, setUser] = useState({});
    const { userId } = useParams();

    useEffect(() => {
        getUserWithProperties(userId).then(data => {
            const userObj = data[0];
            setUser(userObj);
        });
    }, [userId]);
    //console.log(user)
    return <div>User #{userId}</div>
        

    /*     return (
            <section className="user">
                <header className="user-header">{user.user?.fullName}</header>
                <div>
                    <span className="user-info">Property Address: </span>
                    {user.user.address}
                </div>
            </section>
        )
 */}