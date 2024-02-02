export const getAllProperties = () => {
    return fetch(`http://localhost:8088/properties`).then(res => res.json())
}

export const getUserWithProperties = async (userId) => {
return await fetch(`http://localhost:8088/users/${userId}?_embed=properties`).then(res => res.json())
}

export const getPropertiesbyUser = () => {
    return fetch(`http://localhost:8088/properties?_expand=user`).then(res => res.json())
}