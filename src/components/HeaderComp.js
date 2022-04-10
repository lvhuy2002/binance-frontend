import React from 'react';
import logo from "../img/logo.png";
import "../App.css";
const HeaderComp = () => {
    return (
        <div className='header'>
            <img src = {logo} alt = "logo" ></img>

            <div className='right_header header'>
                <button className='grey_button'>Login</button>
                <button className='yellow_button'>Register</button>
            </div>
        </div>
    )
}
export default HeaderComp;
