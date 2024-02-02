import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome"
import { UserNavBar } from "../components/nav/UserNavBar"
import { InspectionList } from "../components/inspections/InspectionList"
import { PropertiesList } from "../components/properties/PropertiesList"
import { UserForm } from "../components/forms/UserForm"
import { InspectionForm } from "../components/forms/InspectionForm"

export const UserViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <UserNavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />
                <Route
                    path="inspections"
                >
                    <Route index element={<InspectionList currentUser={currentUser} />} />
                    <Route path="create" element={<InspectionForm currentUser={currentUser} />} />
                </Route>
                 <Route
                    path="properties"
                    element={<PropertiesList currentUser={currentUser} />}
                />
            </Route>
            <Route path="profile" element={<UserForm currentUser={currentUser} />} />
        </Routes>
    )
}