export const getAllInspections = () => {
    return fetch(`http://localhost:8088/inspections?_embed=properties`).then(res => res.json())
}

export const getPropertiesWithInspections = () => {
    return fetch(`http://localhost:8088/properties/?_embed=inspections`) 
}

// create a fetch call that gets all the properties for a user and embed the inspections

export const deleteInspection = (inspectionId) => {
    return fetch(`http://localhost:8088/inspections/${inspectionId}`, {
      method: "DELETE",  
    })
}