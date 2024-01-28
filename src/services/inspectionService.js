export const getAllInspections = () => {
    return fetch(`http://localhost:8088/inspections`).then(res => res.json())
}