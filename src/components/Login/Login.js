import React, {useContext, useState, useEffect} from "react"
import { Link, Navigate} from "react-router-dom"
import './Login.css'
import { GlobalContext } from "../../GlobalState/GlobalContext" 

const Login = () => {
    const GlobalState = useContext(GlobalContext);
    
    const [Users, SetUsers] = useState([]);
    const [PasswordUsers, SetPasswordUsers] = useState('');

    const [checkUserName,SetCheckUserName] = useState(false);
    
    const [Alert, SetAlert] = useState(false);
    
    const [UserBio, SetUserBio] = useState('')
    const [UserName, SetUserName] = useState('');
    const [Password, SetPassword] = useState('');
    useEffect( () => {
        fetch('http://52.140.197.200:8080/users/')
            .then(res => res.json())
            .then(post => {
                SetUsers(post)
            })
            .catch(err => alert("ERROR USERS"))
    },[])
    useEffect( () => {
        if (checkUserName === true){
            fetch('http://52.140.197.200:8080/user/password/' + UserName + '/')
                .then(res => res.json())
                .then(post => {
                    SetPasswordUsers(post)
                    //console.log(PasswordUsers);
                })
                .catch(err => alert("ERROR LOADING PASS"))  
        }     
    },[checkUserName])
    const handleClick = () => {
        var checkUser = false
        var UserBioTmp = ''
        for (var User of Users) {
            if (User.username === UserName) 
            {
                checkUser = true
                UserBioTmp = User.userbio
            }           
        }
        if (checkUser === true) {
            SetCheckUserName(true)
            SetUserBio(UserBioTmp)
        } else {
            SetCheckUserName(false)
            SetAlert(true)
        }
        if (Password !== PasswordUsers || PasswordUsers === '' || checkUserName === false) {
            SetAlert(true)
        }
    }
    if (Password === PasswordUsers && PasswordUsers !== '' && checkUserName === true) {
        GlobalState.SetCheckLogin(true)
        GlobalState.SetUser(UserName)
        GlobalState.SetUserBio(UserBio)
    } 
    if (GlobalState.checkLogin === true) {
        return (
            <Navigate to='/'/>
        )
    }
    
    return (
        <div className="Login">
            <h1 className="TitleLogin">Binance Account Login</h1>
            <div className="UserPassLogin">
                <div className="UserNameLogin"> 
                    <h5>User Name: </h5> 
                    <input type="text" spellCheck="false" className="UserNameInputLogin" onChange={e => {SetUserName(e.target.value); SetCheckUserName(false); SetAlert(false)}} />
                </div>
                <div className="PasswordLogin">
                    <h5>Password: </h5>
                    <input type="password" className="PasswordInputLogin" onChange={e => {SetPassword(e.target.value); SetCheckUserName(false); SetAlert(false)}} />
                </div>
                {!Alert? <div className="alertWrong"></div> : <h5 className="alertWrong">Wrong username or password</h5>}
                <div>
                    <div className="LoginButton" onClick={() => handleClick() }>
                        <h2>Log In</h2>
                    </div>
                </div>
                <div className="Or">
                    <div className="Or1"></div>
                    <h5>Or</h5>
                    <div className="Or2"></div>
                </div>
                <div>
                    <Link to = "/register" className="RegisterButtonLogin" >
                        <h2>Register</h2>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Login