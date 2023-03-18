import { useEffect, useState } from "react";
import BulbBase from "../BulbBase/BulbBase";
import "./Bulb.css";

const Bulb = ({ id }) => {
    const [bulbOn, setBulbOn] = useState(false);
    const [bulbClass, setBulbClass] = useState("");

    useEffect(() => {
        if (bulbOn) {
            setBulbClass("bg-blue");
        }
        else {
            setBulbClass("");
        }
    }, [bulbOn]);
    return (
        <>
            <div
                className={`bulb d-inline-block ${bulbClass}`}
                id={id}
                onClick={() => setBulbOn((state) => !state)}
            >
                <BulbBase />
            </div>
            {bulbOn && <div className="d-inline-block">
                <select
                id="colordropdown"
                name="colordropdown"
                onChange={(event) => setBulbClass(event.target.value)}
                defaultValue="bg-blue"
                >
                    <option value="bg-aqua">Aqua</option>
                    <option value="bg-blue">Blue</option>
                    <option value="bg-green">Green</option>
                    <option value="bg-salmon">Salmon</option>
                    <option value="bg-seagreen">Seagreen</option>
                    <option value="bg-yellow">Yellow</option>
                </select>
            </div>}
        </>
    );
}

export default Bulb;