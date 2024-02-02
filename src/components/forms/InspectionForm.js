import { useEffect, useState } from "react"
import "./Form.css"
import { createInspection } from "../../services/inspectionService"
import { useNavigate } from "react-router-dom"
import { getAllProperties } from "../../services/propertyService"


export const InspectionForm = ({currentUser}) => {
    const [inspection, setInspection] = useState({ description: "", season: "", interior: false })
    const [allProperties, setAllProperties] = useState ([])
const [userProperties, setUserProperties] = useState([])

    useEffect(() => {
        getAllProperties().then((propertiesArray) => {
            setAllProperties(propertiesArray);
            
            const userProps = propertiesArray.filter(
                (property) => property.userId === currentUser.id
            );
            setUserProperties(userProps);
        });
}, [currentUser])

const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()
        console.log(currentUser)
        if (inspection.description) {
        
       const newInspection = {
            userId: currentUser.id,
            propertyId: parseInt(inspection.propertyId, 10),
            description: inspection.description,
            season: inspection.season,
            interior: inspection.interior,
            dateCompleted: "",
        }

            createInspection(newInspection).then(() => {
            navigate("/inspections")
            })
        } else {
            window.alert("Please fill out the inspection description!")
    }
} 

    return (
        <form>
            <h2>New Inspection</h2>
            <fieldset>
                <div className="form-group">
                    <label> Description</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Brief description of inspection"
                        onChange={(event) => {
                            const inspectionCopy = { ...inspection }
                            inspectionCopy.description = event.target.value
                            setInspection(inspectionCopy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label> Choose a Property</label>
                    <select
                        className="form-control"
                        onChange={(event) => {
                            
                            const inspectionCopy = { ...inspection }
                            inspectionCopy.propertyId = event.target.value
                            setInspection(inspectionCopy)
                            
                        }}
                    >
                        <option value="" enabled="true">Make a selection</option>

                        {userProperties.map((propertyObj) => (
                            <option
                                property={propertyObj}
                                value={propertyObj.id}
                                key={propertyObj.id}
                            >
                                {propertyObj.address}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label> Season</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Spring / Summer/ Fall/ Winter"
                        onChange={(event) => {
                            const inspectionCopy = { ...inspection }
                            inspectionCopy.season = event.target.value
                            setInspection(inspectionCopy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>
                        Interior Inspection:
                        <input
                            type="checkbox" onChange={(event) => {
                            const inspectionCopy = { ...inspection }
                            inspectionCopy.interior = event.target.checked
                            setInspection(inspectionCopy)    
                        }}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info" onClick={handleSave}>Submit Inspection</button>
                </div>
            </fieldset>
     </form>   
    )
}