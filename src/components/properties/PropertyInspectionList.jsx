import React, { useEffect, useState } from "react";
import { getPropertiesWithInspections } from "../../services/inspectionService";
import { Inspection } from "../inspections/Inspection";


export const PropertyInspectionList = ({ propertyId, currentUser }) => {
  const [propertyInspections, setPropertyInspections] = useState([]);

  useEffect(() => {
    getPropertiesWithInspections(propertyId).then((inspectionsArray) => {
      setPropertyInspections(inspectionsArray);
    });
  }, [propertyId]);

  return (
    <div className="property-inspections-container">
      <h2>Inspections for Property {propertyId}</h2>
      <article className="inspections">
        {propertyInspections.map((inspectionObj) => (
          <Inspection
            inspection={inspectionObj}
            currentUser={currentUser}
            key={inspectionObj.id}
          />
        ))}
      </article>
    </div>
  );
};