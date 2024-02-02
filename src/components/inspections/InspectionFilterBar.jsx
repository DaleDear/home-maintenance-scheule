import { useNavigate } from "react-router-dom"

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
                        <button className="filter-btn btn-info" onClick={() => {setShowOpenOnly(true)}}>Open Inspection</button>
                        <button className="filter-btn btn-secondary" onClick={() => {setShowOpenOnly(false)}}>All My Inspections</button>
                    </>
            )}
            
        </div>
    )
}