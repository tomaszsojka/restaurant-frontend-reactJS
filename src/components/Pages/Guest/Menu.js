import React, {useState, useEffect} from "react";
import TableMenu from "../../Menu/TableMenu/TableMenu";
import Confirmation from "./../../Menu/Confirmation/Confirmation"
import breakfast_image from "./../../Menu/Images/breakfast.jpg"
import dinner_image from "./../../Menu/Images/Diner.jpg"
import appetizer_image from "./../../Menu/Images/appetizers.jpg"
import classes from "./Menu.module.css"

import {sendHttpRequest} from "../../../Fetch/useFetch";

export function Menu() {
    const [ordered, setOrdered] = useState(false);
    const [data, setData] = useState([]);

    //old version to get request
    //const [data, setData] = useFetch(
    //"/api/v1/guest/dish"
    //);

    useEffect(() => {
        sendHttpRequest('GET', '/api/v1/guest/dish').then(responseData => {
            setData(responseData);
            console.log(responseData);
        });
    }, []);


function displayConfirmation(){
    setOrdered(true);

    setTimeout(()=>{
        setOrdered(false);
    },3000);
}
        return (
            <div className="container">
                {ordered && <Confirmation toggle={setOrdered}/>}
                <div className={classes.menuElements}>
                    <img src={breakfast_image} alt="breakfast_image" />
                    <TableMenu data={data} nameOfMeal = "breakfast" setOrdered={displayConfirmation}/>
                    <img src={dinner_image} alt="dinner_image" />
                    <TableMenu data={data} nameOfMeal = "dinner" setOrdered={displayConfirmation}/>
                    <img src={appetizer_image} alt="appetizers_image" />
                    <TableMenu data={data} nameOfMeal = "appetizer" setOrdered={displayConfirmation}/>
                </div>
            </div>
    );
}

            export default Menu;