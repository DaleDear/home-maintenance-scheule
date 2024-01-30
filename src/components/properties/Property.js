import "./Property.css"

export const Property = ({ property }) => {
    return (
        <div className="property">
            <div>
                <div className="property-info">Property Id:  {property.id}</div>
            </div>
            <div>
                <div className="property-info">Address:  {property.address}</div>
            </div>
            <div>
                <div className="property-info">Square Footage:  {property.sqFt}</div>
            </div>
            <div>
                <div className="property-info">Floors:  {property.numFloors}</div>
            </div>
            <div>
                <div className="property-info">Year Built:  {property.yearBuilt}</div>
            </div>
            <div>
                <div className="property-info">Central HVAC:  {property.centralHVAC}</div>
            </div>
            <div>
                <div className="property-info">Septic System:  {property.septic}</div>
            </div>
            <div>
                <div className="property-info">Garage Type:  {property.garage}</div>
            </div>
    </div>
    )
}