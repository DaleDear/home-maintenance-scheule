import { useEffect, useState } from "react"
import { getAllProperties } from "../../services/propertyService"
import "./Inspection.css"
import { MarkMaintenanceRequired, MarkCompleteInspection, deleteInspection, getPropertiesWithInspections } from "../../services/inspectionService"
//import { useParams } from "react-router-dom"


export const Inspection = ({ inspection, currentUser, getAndSetInspections }) => {
    const [properties, setProperties] = useState([])
    const [assignedProperty, setAssignedProperty] = useState({})
    //const [maintenances, setMaintenances] = useState([])
    const [maintenanceRequired, setMaintenanceRequired] = useState(false)
    
    
    
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
 

  
    
    const handleMarkComplete = () => {
        const completedInspection = {
            id: inspection.id,
            userId: inspection.userId,
            propertyId: inspection.propertyId,
            description: inspection.description,
            interior: inspection.interior,
            season: inspection.season,
            maintenanceRequired: inspection.maintenanceRequired,
            dateCompleted: new Date(), 
        }
        MarkCompleteInspection(completedInspection).then(() => {
            getAndSetInspections()
        })

}

    const handleDelete = () => {
        deleteInspection(inspection.id).then(() => {
          getAndSetInspections()
      })  
    }
    

     const handleMaintenanceRequired = () => {
        const updatedInspection = {
            id: inspection.id,
            userId: inspection.userId,
            propertyId: inspection.propertyId,
            description: inspection.description,
            interior: inspection.interior,
            season: inspection.season,
            dateCompleted: inspection.date,
            maintenanceRequired: true,
        }
        MarkMaintenanceRequired(updatedInspection).then(() => {
            //setMaintenanceRequired(true);
            getAndSetInspections();
        })
        /* setMaintenanceRequired(true).then(() => {
                getAndSetInspections()
        })
 */    }


//console.log(assignedProperty)

    return (
        <section className="inspection">
            <header className="inspection-info">#{inspection.id} | {inspection.property.address}</header>
            <div>{inspection.description}</div>
            
              <footer>
                {/* <div>
                    <div className="inspection-info">Assigned Property</div>
                    <div>
                        {assignedProperty ? assignedProperty.property?.address : "None"}
                    </div>
                </div> */}
                <div>
                  <div className="inspection-info">Interior:</div>
                  <div>{inspection.interior ? "yes" : "no"}</div>
                </div>
                <div className="btn-container">
                     
                    {/* button for logged in user, aka property owner, to mark an inspection as 'maintenance required' */}
                    {!maintenanceRequired && (
                        <button className="btn btn-secondary" onClick={handleMaintenanceRequired}>Maintenance Required</button>
                        )}

                    
                    {/* button for logged in user to mark an inspection as completed if the dateCompleted field is an empty string*/}
                    {(inspection.userId === currentUser.id || inspection.property.userId === currentUser.id) && !inspection.dateCompleted ? (
                        <button className="btn btn-primary" onClick={handleMarkComplete}>Mark Completed</button>
                    ) : (
                        ""
                    )}
                    {/* {inspection?.userId === currentUser.id && !inspection.dateCompleted ? (
                        <button className="btn btn-primary" onClick={handleMarkComplete}>Mark Complete</button>
                    ) : (
                        ""
                    )} */}
                    
                    {/* {assignedProperty?.userId === currentUser.id && !inspection.dateCompleted ? <button>Mark Complete</button> : ""}  */}
                  {/*   <button>Delete Item</button> */}
                    {!currentUser.isStaff ? (<button className="btn btn-warning" onClick={handleDelete}>Delete</button>
                    ) : (
                            ""
                    )}
                    {/* button for logged in user, aka property owner, to delete an inspection */}
                </div>
              </footer>
            </section>
    )
}