import { useEffect, useState } from "react"
import { getAllProperties } from "../../services/propertyService"
import { Property } from "./Property"

export const PropertiesList = () => {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        getAllProperties().then(propertyArray => {
        setProperties(propertyArray)  
       }) 
    }, [])

    return (
        <div>
            {properties.map((propertyObj) => {
                return <Property property={propertyObj} key={propertyObj.id} />
            })}
        </div>
    )
}