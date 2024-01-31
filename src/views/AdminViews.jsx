import { Outlet, Route, Routes } from "react-router-dom"
import { AdminNavBar } from "../components/nav/AdminNavBar"
import { Welcome } from "../components/welcome/Welcome"
import { InspectionList } from "../components/inspections/InspectionList"
import { PropertiesList } from "../components/properties/PropertiesList"
import { UserList } from "../components/users/UsersList"
import { UserDetails } from "../components/users/UserDetails"
import { PropertyInspectionList } from "../components/properties/PropertyInspectionList"
import { UserForm } from "../components/forms/UserForm"

export const AdminViews = (currentUser) => {
    return (
         <Routes>
            <Route
                path="/"
                element={
                    <>
                        <AdminNavBar />
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