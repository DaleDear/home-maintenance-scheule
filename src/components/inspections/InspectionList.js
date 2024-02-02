import { useEffect, useState } from "react"
import { getAllInspections } from "../../services/inspectionService"
import { Inspection } from "./Inspection"
import "./Inspection.css"
import { InspectionFilterBar } from "./InspectionFilterBar"
import { getAllProperties } from "../../services/propertyService"


export const InspectionList = ({ currentUser }) => {
  const [allInspections, setAllInspections] = useState([])
  const [showInteriorOnly, setShowInteriorOnly] = useState(false)
  const [showOpenOnly, setShowOpenOnly] = useState (false)
  const [filteredInspections, setFilteredInspections] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [allProperties, setAllProperties] = useState([])
  
  
  const getAndSetAllProperties = () => {
        getAllProperties().then((propertiesArray) => {
            if (currentUser.isStaff) {
            setAllProperties(propertiesArray)
            } else {
                const userProperties = propertiesArray.filter(
                    (property) => property.userId === currentUser.id
                
                )
                setAllProperties(userProperties)
            }
        
        })
    }
  
  
  const getAndSetInspections = () =>
    getAllInspections().then((inspectionsArray) => {
      if (currentUser.isStaff) {
        setAllInspections(inspectionsArray)
      } else {
        //const userPropertyIds = allProperties.map((property) => property.id);

        const userInspections = inspectionsArray.filter(
          (inspection) => currentUser.id === inspection.property.userId 
        );
        setAllInspections(userInspections)
        console.log("inspections set!")
      }
    })

 

 /* useEffect(() => {
   getAllInspections().then((inspectionsArray) => {
    setAllInspections(inspectionsArray)
    console.log("inspections set!")
  })
  }, []) */
  
  /* useEffect(() => {
    getAndSetAllProperties()
  }, [currentUser]) */

  
  useEffect(() => {
    getAndSetInspections()
  }, [])


  /* useEffect(() => {
    if (showInteriorOnly) {
      const interiorInspections = allInspections.filter(inspection => inspection.interior === true)
      setFilteredInspections(interiorInspections)
    } 
  }, [showInteriorOnly, allInspections])
 */

  /* useEffect(() => {
    const foundInspections = allInspections.filter((inspection) =>
      inspection.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
      setFilteredInspections(foundInspections)
}, [searchTerm, allInspections]) 
 */
  useEffect(() => {
    if (showOpenOnly) {
      const openInspections = allInspections.filter(inspection => inspection.dateCompleted)
      setFilteredInspections(openInspections)
    } 
  }, [showOpenOnly, allInspections])

  return (
    <div className="inspections-container">
      <h2>Inspections</h2>
      <InspectionFilterBar  
        setShowInteriorOnly={setShowInteriorOnly}
        setShowOpenOnly={setShowOpenOnly}
        setSearchTerm={setSearchTerm} 
        currentUser={currentUser}
      />
      <div>
        <input onChange={(event) => { setSearchTerm(event.target.value) }} type="text" placeholder="Search"></input>
      </div> 
      <article className="inspections">
        {allInspections.map((inspectionObj) => {
          return (
            <Inspection
              inspection={inspectionObj}
              currentUser={currentUser}
              getAndSetAllProperties={getAndSetAllProperties}
              getAndSetInspections={getAndSetInspections}
              key={inspectionObj.id}
            />
          )
        })}
      </article>
    </div>
  );

}