//import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from 'react';
import { getAllInspections } from './services/inspectionService';

export const App = () => {
  const [allInspections, setAllInspections] = useState([])
  const [showInteriorOnly, setShowInteriorOnly] = useState(false)
  const [filteredInspections, setFilteredInspections] = useState([])


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
  
  return (
    <div className="inspections-container">
      <h2>Inspections</h2>
      <div>
        <button onClick={() => { setShowInteriorOnly(true) }}>Interior Only</button>
        <button onClick={() => { setShowInteriorOnly(false)}}>Show All</button>
      </div>
      <article className="inspections">
        {filteredInspections.map((inspection) => {
          return (
            <section className="inspection" key={inspection.id}>
              <header className="inspection-info">#{inspection.id}</header>
              <div>{inspection.description}</div>
              <div>Season: {inspection.season}</div>
              <footer>
                <div>
                  <div className="inspection-info">Interior:</div>
                  <div>{inspection.interior ? "yes" : "no"}</div>
                </div>
              </footer>
            </section>
          )
        })}
      </article>
    </div>
  );
}

export default App;
