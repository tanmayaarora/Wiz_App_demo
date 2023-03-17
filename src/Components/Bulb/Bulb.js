import { useState } from "react";
import "./Bulb.css";

const Bulb = ({id}) => {
    const [bulbOn, setBulbOn] = useState(false);
    console.log("BulbOn ",bulbOn);
    return (
        <div
        className={`bulb ${bulbOn === true ? "bg-blue" : ""}`}
        id={id}
        onClick={() => setBulbOn((state) => !state)}
        >
            <div className="rect"></div>
        </div>
    );
}

export default Bulb;