import React, { useEffect, useState } from "react";
import { getPropertiesWithInspections } from "../../services/inspectionService";
import { Inspection } from "../inspections/Inspection";
import { useParams } from "react-router-dom";


export const PropertyInspectionList = ({ currentUser }) => {
  const [propertyInspections, setPropertyInspections] = useState([]);
  const { propertyId, inspectionId } = useParams();

  useEffect(() => {
    getPropertiesWithInspections(inspectionId).then((inspectionsArray) => {
      setPropertyInspections(inspectionsArray);
    });
  }, [inspectionId]);

  
  return (
    <div className="property-inspections-container">
      <h2>Inspections for Property {propertyId}</h2>
      <article className="inspections">
        {propertyInspections.map((inspection) => (
          <Inspection
            inspection={inspection}
            property={propertyId}
            currentUser={currentUser}
            key={inspection.id}
          />
        ))}
      </article>
    </div>
  );
};