import React, {useContext, useState} from 'react';
import logo from "../img/logo.png";
import userIcon from "../img/userIcon.png"
import "../App.css";
import { Link } from "react-router-dom"
import { GlobalContext } from '../GlobalState/GlobalContext';
const HeaderComp = () => {
    const GlobalState = useContext(GlobalContext);
    const handleClick = () => {
        GlobalState.SetUser('')
        GlobalState.SetCheckLogin(false);
    }
    return (
        <div className='header'>
            <div className='left_header'>
                <img src = {logo} alt = "logo" ></img>
                <Link to = {'/'}>
                    <button className='Home_button'>Home</button>
                </Link>
                <Link to = {'/market'}>
                    <button className='Market_button'>Market</button>
                </Link>
            </div>
            {!GlobalState.checkLogin ?
            <div className='right_header'>
                <Link to = {'/login'}>
                    <button className='grey_button'>Log In</button>
                </Link>
                <Link to = {'/register'}>
                    <button className='yellow_button'>Register</button>
                </Link>
            </div>
            :
            <div className='right_header'>
                <div className='UserHeader'>
                    <h5>{GlobalState.user}</h5>
                    <img src={userIcon} className = 'userIcon' alt='User Icon'/>
                </div>
                <button className='yellow_button' onClick={() => handleClick()}>Log Out</button>
            </div>
            }
        </div>
    )
}
export default HeaderComp;
