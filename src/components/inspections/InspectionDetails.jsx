/* import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertiesWithInspections } from "../../services/inspectionService";


export const InspectionDetails = () => {
    const [inspection, setInspection] = useState({});
    const { userId } = useParams();

       useEffect(() => {
        getPropertiesWithInspections(userId).then(data => {
            setInspection(data);
        });
    }, [userId]); */
    //console.log(user)

    //return <></>
//}

