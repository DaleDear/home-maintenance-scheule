import { useEffect, useState } from "react"
import { getAllInspections } from "../../services/inspectionService"
import { Inspection } from "./Inspection"
import { useParams } from "react-router-dom"
import "./Inspection.css"
import { InspectionFilterBar } from "./InspectionFilterBar"


export const InspectionList = ({ currentUser }) => {
  const [allInspections, setAllInspections] = useState([])
  const [showInteriorOnly, setShowInteriorOnly] = useState(false)
  const [showOpenOnly, setShowOpenOnly] = useState (false)
  const [filteredInspections, setFilteredInspections] = useState([])
  const [ searchTerm, setSearchTerm] = useState("")
  //const [inspectionId] = useParams();
  
  const getAndSetInspections = () =>
    getAllInspections().then((inspectionsArray) => {
      if (currentUser.isStaff) {
        setAllInspections(inspectionsArray)
      } else {
        const userInspections = inspectionsArray.filter(
          (inspection) => inspection.userId === currentUser.id
        )
        setAllInspections(userInspections)
        console.log("inspections set!")
      }
    })

 

 useEffect(() => {
   getAllInspections().then((inspectionsArray) => {
    setAllInspections(inspectionsArray)
    console.log("inspections set!")
  })
  }, [])
  
  
  useEffect(() => {
    getAndSetInspections()
  }, [])


  useEffect(() => {
    if (showInteriorOnly) {
      const interiorInspections = allInspections.filter(inspection => inspection.interior === true)
      setFilteredInspections(interiorInspections)
    } else {
      setFilteredInspections(allInspections)
    }
  }, [showInteriorOnly, allInspections])


  useEffect(() => {
    const foundInspections = allInspections.filter((inspection) =>
      inspection.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
      setFilteredInspections(foundInspections)
}, [searchTerm, allInspections]) 

  useEffect(() => {
    if (showOpenOnly) {
      const openInspections = allInspections.filter(inspection => inspection.dateCompleted === "")
      setFilteredInspections(openInspections)
    } else {
     setFilteredInspections(allInspections) 
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
        {filteredInspections.map((inspectionObj) => {
          return (
            <Inspection
              inspection={inspectionObj}
              currentUser={currentUser}
              getAndSetInspections={getAndSetInspections}
              key={inspectionObj.id}
            />
          )
        })}
      </article>
    </div>
  );

}