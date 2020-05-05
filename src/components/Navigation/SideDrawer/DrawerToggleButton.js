import React from 'react';
import './DrawerToogleButton.css';


const DrawerToggleButton = props => (
 <button className="toggle-button" onClick={props.click}>
     <div className="toggle-button_line"/>
     <div className="toggle-button_line"/>
     <div className="toggle-button_line"/>
 </button>

);

export default DrawerToggleButton;