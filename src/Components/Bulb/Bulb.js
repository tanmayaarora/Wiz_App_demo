import { useEffect, useState } from "react";
import BulbBase from "../BulbBase/BulbBase";
import "./Bulb.css";

const Bulb = ({id}) => {
    const [bulbOn, setBulbOn] = useState(false);
    const [bulbClass, setBulbClass] = useState("");
    
    useEffect(() => {
        if(bulbOn) {
            setBulbClass("bg-blue");
        }
        else {
            setBulbClass("");
        }
    }, [bulbOn]);
    return (
        <div
        className={`bulb ${bulbClass}`}
        id={id}
        onClick={() => setBulbOn((state) => !state)}
        >
            <BulbBase/>
        </div>
    );
}

export default Bulb;