import { useEffect, useState } from "react"
import { getAllProperties } from "../../services/propertyService"

import "./Inspection.css"


export const Inspection = ({ inspection, currentUser }) => {
    const [properties, setProperties] = useState([])
    const [assignedProperty, setAssignedProperty] = useState({})

    useEffect(() => {
        getAllProperties().then((propertiesArray) => {
            setProperties(propertiesArray)
        })
    }, [])  

    useEffect(() => {
        const foundProperty = properties.find(
        
            (property) => inspection.property && property.id === inspection.property[0]?.propertyId
        )
        setAssignedProperty(foundProperty)
    }, [properties, inspection]) 
 
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
                    <button>Maintenance Required</button>
                    {/* button for logged in user, who is the property owner, to make an inspection as 'maintenance required' */}
                    <button>Mark Complete</button>
                    {/* button for logged in user, who is the property owner, to mark an inspection as completed */}
                    {assignedProperty?.userId === currentUser.id && !inspection.dateCompleted ? <button>Mark Complete</button> : ""} 
                    <button>Delete Item</button>
                </div>
              </footer>
            </section>
    )
}