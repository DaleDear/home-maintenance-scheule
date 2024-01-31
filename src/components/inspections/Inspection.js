import { useEffect, useState } from "react"
import { getAllProperties } from "../../services/propertyService"
import "./Inspection.css"
import { getPropertiesWithInspections } from "../../services/inspectionService"
//import { useParams } from "react-router-dom"

export const Inspection = ({ inspection, currentUser }) => {
    const [properties, setProperties] = useState([])
    const [assignedProperty, setAssignedProperty] = useState({})
    
    
    useEffect(() => {
        getPropertiesWithInspections().then((propertiesWithInspections) => {
            setProperties(propertiesWithInspections.properties || [])
        })
    }, [])  

    useEffect(() => {
        const foundProperty = properties.find(
        
            (property) => inspection.property && property.id === inspection.property[0]?.propertyId
        )
        setAssignedProperty(foundProperty)
    }, [properties, inspection]) 
 

    
//console.log(assignedProperty)

    return (
        <section className="inspection">
              <header className="inspection-info">#{inspection.id}</header>
              <div>{inspection.description}</div>
              <footer>
                <div>
                    <div className="inspection-info">Assigned User</div>
                    <div>
                        {assignedProperty ? assignedProperty.user?.fullName : "None"}
                    </div>
                </div>
                <div>
                  <div className="inspection-info">Interior:</div>
                  <div>{inspection.interior ? "yes" : "no"}</div>
                </div>
                <div className="btn-container">
                    {/* <button>Maintenance Required</button> */}
                    {/* button for logged in user, aka property owner, to mark an inspection as 'maintenance required' */}
                    {currentUser && !assignedProperty ? (
                        <button>Maintenance Required</button>
                    ) : (
                        ""
                    )}
                    <button>Mark Complete</button>
                    {/* button for logged in user, aka property owner, to mark an inspection as completed if the dateCompleted field is an empty string*/}
                    {/* {assignedProperty?.userId === currentUser.id && !inspection.dateCompleted ? <button>Mark Complete</button> : ""}  */}
                    <button>Delete Item</button>
                    {/* button for logged in user, aka property owner, to delete an inspection */}
                </div>
              </footer>
            </section>
    )
}