//import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from 'react';
import { getAllInspections } from './services/inspectionService';

export const App = () => {
  const [allInspections, setAllInspections] = useState([])

  useEffect(() => {
   getAllInspections().then((inspectionsArray) => {
    setAllInspections(inspectionsArray)
    console.log("inspections set!")
  })
}, [])

  return (
    <div className="inspections-container">
      <h2>Inspections</h2>
      <article className="inspections">
        {allInspections.map((inspection) => {
          return (
            <section className="inspection" key={inspection.id}>
              <header className="inspection-info">#{inspection.id}</header>
              <div>{inspection.description}</div>
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
