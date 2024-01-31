import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getUserWithProperties } from "../../services/propertyService"
import "./User.css"
import { PropertiesList } from "../properties/PropertiesList"
import { User } from "./User"
import { Property } from "../properties/Property"
import { InspectionList } from "../inspections/InspectionList"
import { PropertyInspectionList } from "../properties/PropertyInspectionList"


export const UserDetails = () => {
    const [user, setUser] = useState({});
    const { userId } = useParams();

       useEffect(() => {
        getUserWithProperties(userId).then(data => {
            setUser(data);
        });
    }, [userId]);
    //console.log(user)
    
    
    return (
        <section>
            <header>User Name: {user.fullName}</header>
            <div>
                <span>Email: {user.email}</span>
            </div>
            <section>
            <div>
                    <span>Property List: </span>
                    {user.properties && user.properties.length > 0 ? (
                        <ul>
                            {user.properties.map(property => (
                                <li key={property.id}>
                                    <div>Property Id: {property.id}</div>
                                    <div>Address: {property.address}</div>
                                    <div>Square Feet: {property.sqFt}</div>
                                    <div>Floors: {property.numFloors}</div>
                                    <div>Year Built: {property.yearBuilt}</div>
                                    <div>Central HVAC: {property.centralHVAC}</div>
                                    <div>Septic System: {property.septic}</div>
                                    <div>Garage: {property.garage}</div>
                                    <Link to={`/inspections/${property.id}`}>Inspections</Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div>No properties available</div>
                    )}
                </div>
            </section>
            {/* <div><Link to={<InspectionList />} /></div> */}
        
        </section>
    )

    /* return (
        <div>
            {user.map((userObj) => {
                return (
                    <Link to={`/users/${userObj.id}`} key={userObj.id}>
                        <User user={userObj} key={userObj.id} />
                    </Link>
                )
            })}
                
        </div> 
            
    )   */
 }