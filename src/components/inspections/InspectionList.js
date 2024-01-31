import { useEffect, useState } from "react"
import { getAllInspections } from "../../services/inspectionService"
import { Inspection } from "./Inspection"
//import { useParams } from "react-router-dom"
//import "./Inspection.css"


export const InspectionList = ({ currentUser }) => {
  const [allInspections, setAllInspections] = useState([])
  const [showInteriorOnly, setShowInteriorOnly] = useState(false)
  const [filteredInspections, setFilteredInspections] = useState([])
  //const [ searchTerm, setSearchTerm] = useState("")
  //const [inspectionId] = useParams();
  

  useEffect(() => {
   getAllInspections().then((inspectionsArray) => {
    setAllInspections(inspectionsArray)
    console.log("inspections set!")
  })
}, [])

  useEffect(() => {
    if (showInteriorOnly) {
      const interiorInspections = allInspections.filter(inspection => inspection.interior === true)
      setFilteredInspections(interiorInspections)
    } else {
      setFilteredInspections(allInspections)
    }
  }, [showInteriorOnly, allInspections])


 /*  useEffect(() => {
    const foundInspections = allInspections.filter((inspection) =>
      inspection.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
      setFilteredInspections(foundInspections)
}, [searchTerm, allInspections]) */

  return (
    <div className="inspections-container">
      <h2>Inspections</h2>
      <div>
        <button onClick={() => { setShowInteriorOnly(true) }}>Interior Only</button>
        <button onClick={() => { setShowInteriorOnly(false) }}>Show All</button>
      </div>
    {/*   <div>
        <input onChange={(event) => { setSearchTerm(event.target.value) }} type="text" placeholder="Search"></input>
      </div> */}
      <article className="inspections">
        {filteredInspections.map((inspection) => {
          return (
            <Inspection
              inspection={inspection}
              currentUser={currentUser}
              key={inspection.id}
            />
          )
        })}
      </article>
    </div>
  );

}