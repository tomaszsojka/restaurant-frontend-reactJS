import React, {useState} from "react";
import {TableMenu} from "../../Menu/TableMenu/TableMenu";
import dinner from "./../../Menu/DataMenu/dinner";
import breakfast from "./../../Menu/DataMenu/breakfast";
import appetizers from "./../../Menu/DataMenu/appetizers"
import Confirmation from "./../../Menu/Confirmation/Confirmation"
import breakfast_image from "./../../Menu/Images/breakfast.jpg"
import dinner_image from "./../../Menu/Images/Diner.jpg"
import appetizer_image from "./../../Menu/Images/appetizers.jpg"
import classes from "./Menu.module.css"

export function Menu() {

const [ordered, setOrdered] = useState(false);

function displayConfirmation(){
    setOrdered(true);

    setTimeout(()=>{
        setOrdered(false);
    },3000);
}
        return (
            <div className="container">
                <div className="Menu">
                    {ordered && <Confirmation toggle={setOrdered}/>}
                    <div className={classes.menuElements}>
                        <img src={breakfast_image} alt="breakfast_image" />
                        <TableMenu data={breakfast} setOrdered={displayConfirmation}/>
                        <img src={dinner_image} alt="dinner_image" />
                        <TableMenu data={dinner} setOrdered={displayConfirmation}/>
                        <img src={appetizer_image} alt="appetizers_image" />
                        <TableMenu data={appetizers} setOrdered={displayConfirmation}/>
                    </div>
                </div>
            </div>
        );
}

            export default Menu;