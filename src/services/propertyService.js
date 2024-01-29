export const getAllProperties = () => {
    return fetch(`http://localhost:8088/properties`).then(res => res.json())
}