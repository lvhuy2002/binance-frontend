import React, {useContext, useState, useEffect} from "react"
import { Navigate } from "react-router-dom"
import './Register.css'
import { GlobalContext } from "../../GlobalState/GlobalContext"

const Register = () => {
    const GlobalState = useContext(GlobalContext)

    const [Users, SetUsers] = useState([])
    const [UserMain, SetUserMain] = useState({})
    //const [checkUserName,SetCheckUserName] = useState(false);

    const [UserName, SetUserName] = useState('')
    const [UserBio, SetUserBio] = useState('')
    const [Password, SetPassword] = useState('')
    
    useEffect( () => {
        fetch('http://52.140.197.200/users/')
            .then(res => res.json())
            .then(post => {
                SetUsers(post)
            })
            .catch(err => alert(err))
    },[])
    const CreatUser = (data) => {
        fetch('http://52.140.197.200/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(post => SetUserMain(post))
            .catch(err => alert(err))
    }
    const handleClick = () => {
        var checkUser = true
        for(var User of Users) {
            if (User.username === UserName) {
                checkUser = false
            }
        }
        if (UserName !== '' && Password !== '' && checkUser === true) {
            CreatUser({username: UserName, userbio: UserBio, password: Password})
            GlobalState.SetCheckLogin(true)
        } else {
            console.log('tru`ng user')
        }
    }

    if (GlobalState.checkLogin === true) {
        return (
            <Navigate to='/'/>
        )
    }

    return (
        <div className="Register">
            <h1 className="TitleRegister">Binance Account Register</h1>
            <div className="UserPassRegister">
                <div className="UserNameRegister"> 
                    <h5>User Name: </h5> 
                    <input type="text" spellCheck="false" className="UserNameInputRegister" onChange={e => {SetUserName(e.target.value)}}/>
                </div>
                <div className="UserBioRegister">
                    <h5>User Bio: </h5>
                    <input type="text" spellCheck="false" className="UserBioInputRegister" onChange={e => {SetUserBio(e.target.value)}}/>
                </div>
                <div className="PasswordRegister">
                    <h5>Password: </h5>
                    <input type="password" className="PasswordInputRegister" onChange={e => {SetPassword(e.target.value)}}/>
                </div>
                <div>
                    <div className="RegisterButton" onClick={() => handleClick()}>
                        <h2>Register</h2>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Register