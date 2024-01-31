import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar"
import { Welcome } from "../components/welcome/Welcome"
import { InspectionList } from "../components/inspections/InspectionList"
import { PropertiesList } from "../components/properties/PropertiesList"
import { UserList } from "../components/users/UsersList"
import { UserDetails } from "../components/users/UserDetails"
import { useEffect, useState } from "react"
import { PropertyInspectionList } from "../components/properties/PropertyInspectionList"
import { UserForm } from "../components/forms/UserForm"


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localHoneyUser = localStorage.getItem("honey_user")
        const honeyUserObject = JSON.parse(localHoneyUser)

        setCurrentUser(honeyUserObject)
    }, [])



    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />
                <Route
                    path="inspections"
                    element={<InspectionList currentUser={currentUser} />}
                />
                <Route path="properties" element={<PropertiesList />} />
                <Route path="users">
                    <Route index element={<UserList />} />
                    <Route path=":userId" element={<UserDetails />} />
                </Route>
                <Route
                    path="/inspections/:propertyId/:inspectionId"
                    /* element={<PropertyInspectionList />} */
                    
                    render={({ match }) => (
                        <PropertyInspectionList
                        propertyId={match.params.propertyId}
                        currentUser={currentUser}
                        />
                    )}
                />
            </Route>
            <Route path="profile" element={<UserForm currentUser={currentUser} />} />
        </Routes>
    )
}