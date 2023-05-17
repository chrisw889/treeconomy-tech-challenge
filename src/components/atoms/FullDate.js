import { useEffect, useState } from "react";
import "../../styles/App.css";

const FullDate = (props) => {
    // Page is re rendered once the date string is generated
    const [dateString, setDateString] = useState("");

    // On mount the unix date is converted into the full date string
    useEffect(() => {
        const date = new Date(props.date);
        const month = date.toLocaleString('default', { month: 'long' });
        let day = date.getDate();
        switch (day % 10) {
            case 1:  day = day + "st"; break;
            case 2:  day = day + "nd"; break;
            case 3:  day = day + "rd"; break;
            default: day = day + "th";
        }

        setDateString(day + " " + month + " " + date.getFullYear());
    }, [props.date]);

    return (
        <>
            <div>{dateString}</div>
        </>
    );
}

export default FullDate;