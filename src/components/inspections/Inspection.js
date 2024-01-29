import { useEffect, useState } from "react"
import { getAllProperties } from "../../services/propertyService"

export const Inspection = ({ inspection }) => {
    /* const [properties, setProperties] = useState([])
    const [assignedProperty, setAssignedProperty] = useState({})

    useEffect(() => {
        getAllProperties().then((propertiesArray) => {
            setProperties(propertiesArray)
        })
    }, [])  */

    /* useEffect(() => {
        const foundProperty = properties.find(
            (property) => property.id === inspection.property[0]?.propertyId
        )
        setAssignedProperty(foundProperty)
    }, [properties, inspection])  */
 
    return (
        <section className="inspection">
              <header className="inspection-info">#{inspection.id}</header>
              <div>{inspection.description}</div>
              <div>Season: {inspection.season}</div>
              <footer>
                <div>
                   {/*  <div>
                        {assignedProperty ? assignedProperty.property?.id : "None"}
                    </div> */}
                  <div className="inspection-info">Interior:</div>
                  <div>{inspection.interior ? "yes" : "no"}</div>
                </div>
              </footer>
            </section>
    )
}