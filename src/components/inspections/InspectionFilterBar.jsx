import { useNavigate } from "react-router-dom"
import "./Inspection.css"

export const InspectionFilterBar = ({
    setShowInteriorOnly,
    setShowOpenOnly,
    setSearchTerm,
    currentUser,
}) => {

     const navigate = useNavigate()


    
     return (
        <div className="filter-bar">
            {currentUser.isStaff ? (
                <>
                    <button
                        className="filter-btn btn-primary"
                        onClick={() => {
                            setShowInteriorOnly(true)
                        }}
                    >
                Interior
            </button>
            <button
                className="filter-btn btn-info"
                onClick={() => {
                    setShowInteriorOnly(false)
                }}
            >
                Show All
            </button>
            <input
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
                type="text"
                placeholder="Search Tickets"
                className="inspection-search"
                    />
                </> 
            ) : (
                    <>
                        <button className="filter-btn btn-primary" onClick={() => {
                            navigate("/inspections/create")
                        }}
                        >
                        Create Inspection
                        </button>
                        <button className="filter-btn btn-primary" onClick={() => {setShowOpenOnly(true)}}>Open Inspections Only</button>
                         <button className="filter-btn btn-secondary" onClick={() => {setShowOpenOnly(true && false)}}>All My Inspections</button>
                         {/* <button className="filter-btn btn-info" onClick={() => {setMaintenaceRequired(true)}}>Only Maintenance Required</button>  */}
                    </>
            )}
            
        </div>
    )
}