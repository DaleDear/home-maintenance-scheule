export const getAllInspections = () => {
    return fetch(`http://localhost:8088/inspections?_embed=properties`).then(res => res.json())
}