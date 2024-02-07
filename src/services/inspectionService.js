export const getAllInspections = async () => {
    return await fetch(`http://localhost:8088/inspections?_expand=property`).then(res => res.json())
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

export const createInspection = (inspection) => {
    return fetch(`http://localhost:8088/inspections`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(inspection),
})
}

export const MarkCompleteInspection = (inspection) => {
    return fetch(`http://localhost:8088/inspections/${inspection.id}`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(inspection),
    })
}