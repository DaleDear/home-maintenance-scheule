//import logo from './logo.svg';
import { Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import { InspectionList } from "./components/inspections/InspectionList";
import { PropertiesList } from "./components/properties/PropertiesList";
import { NavBar } from "./components/nav/NavBar";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <NavBar />
          <Outlet />
        </>
      }
      >
        <Route path="inspections" element={<InspectionList />} />
        <Route path="properties" element={<PropertiesList />} />
      </Route>
    {/* <InspectionList /> */}
   {/*  <PropertiesList /> */}
  </Routes>
 )}

export default App;
