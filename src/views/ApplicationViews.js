//import { Outlet, Route, Routes } from "react-router-dom"
//import { NavBar } from "../components/nav/AdminNavBar"
//import { Welcome } from "../components/welcome/Welcome"
//import { InspectionList } from "../components/inspections/InspectionList"
//import { PropertiesList } from "../components/properties/PropertiesList"
//import { UserList } from "../components/users/UsersList"
//import { UserDetails } from "../components/users/UserDetails"
import { useEffect, useState } from "react"
//import { PropertyInspectionList } from "../components/properties/PropertyInspectionList"
//import { UserForm } from "../components/forms/UserForm"
import { AdminViews } from "./AdminViews"
import { UserViews } from "./UserViews"


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localHoneyUser = localStorage.getItem("honey_user")
        const honeyUserObject = JSON.parse(localHoneyUser)

        setCurrentUser(honeyUserObject)
    }, [])



    return currentUser.isStaff ? (
        <AdminViews currentUser={currentUser} />
    ) : (
            <UserViews currentUser={currentUser} />
    )
}