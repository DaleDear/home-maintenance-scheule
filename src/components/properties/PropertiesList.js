import { useEffect, useState } from "react"
import { getAllProperties } from "../../services/propertyService"
import { Property } from "./Property"
import { createUser } from "../../services/userService"

export const PropertiesList = ({ currentUser }) => {
    const [allProperties, setAllProperties] = useState([])

    const getAndSetProperties = () => {
        getAllProperties().then((propertiesArray) => {
            if (currentUser.isStaff) {
            setAllProperties(propertiesArray)
            } else {
                const userProperties = propertiesArray.filter(property => property.userId === currentUser.id
                
                )
                setAllProperties(userProperties)
            }
        
        })
    }
    
    useEffect(() => {
        getAndSetProperties()
    }, [currentUser])

    useEffect(() => {
        getAllProperties().then(propertyArray => {
        setAllProperties(propertyArray)  
       }) 
    }, [])

    return (
        <div>
            {allProperties.map((propertyObj) => {
                return <Property property={propertyObj} key={propertyObj.id} />
            })}
        </div>
    )
}