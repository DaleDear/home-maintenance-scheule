import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome"
import { UserNavBar } from "../components/nav/UserNavBar"
import { InspectionList } from "../components/inspections/InspectionList"
import { PropertiesList } from "../components/properties/PropertiesList"

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
                    element={<InspectionList currentUser={currentUser} />}
                />
                 <Route
                    path="properties"
                    element={<PropertiesList currentUser={currentUser} />}
                />
            </Route>
        </Routes>
    )
}