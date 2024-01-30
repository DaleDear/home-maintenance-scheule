import "./User.css"


export const User = ({ user }) => {
    return (
        <div className="user">
            <div>
                <div className="user-info">Name:  {user.fullName}</div>
            </div>
            <div>
                <div className="user-info">Email:  {user.email}</div>
            </div>
    </div>
    )
}