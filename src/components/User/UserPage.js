import React, {useContext, useState, useEffect} from "react";
import './UserPage.css'
import userImage from '../../img/userImage.png'
import { GlobalContext } from "../../GlobalState/GlobalContext";
import { Navigate } from "react-router-dom";

const UserPage = () => {
    const GlobalState = useContext(GlobalContext)
    const [DataUsers, SetDataUsers] = useState([])
    const [DataAllToken, SetDataAllToken] = useState([]);
    
    useEffect(() => {
        const fetching = () => {
            fetch('http://52.140.197.200:8080/user/' + GlobalState.user)
                .then(res => res.json())
                .then(post => SetDataUsers(post))
                .catch(err => alert("Fail to load user's token"))
            
        }    
        const id = setInterval(() => {
            fetching();
        }, 2000)  
        return () => clearInterval(id);
    }, [GlobalState]);
    useEffect(() => {
        fetch('http://52.140.197.200:8080/tokens/')
                .then(res => res.json())
                .then(post => SetDataAllToken(post))
                .catch(err => alert("ERROR LOADING TOKEN"))
    }, [])
    for (var DataUser of DataUsers) {
        var img, symbol;
        for (var Token of DataAllToken) {
            if (Token.tokenname === DataUser.tokenname) {
                img = Token.tokenimage
                symbol = Token.tokensymbol
            }
        }
        DataUser.tokenImage = img;
        DataUser.tokenSymbol = symbol.toUpperCase();
    }
    if (GlobalState.checkLogin === false) {
        return (
            <Navigate to='/'/>
        )
    }
    return (
        <div className="UserPage">
            <div className="UserPageTop">
                <img src={userImage} className = 'UserImage' alt='User Image'/>
                <div className = "UserInfo">
                    <h1 className="UserNameUserPage">{GlobalState.user}</h1>
                    <h5 className="UserBioUserPage">{GlobalState.userBio}</h5>
                </div>
            </div>
            <div className="UserPageBottom">
                <div className="TitleUserDataCoin">
                    <h4 className="TitleUserDataCoinToken">Coin</h4>
                    <h4 className="TitleUserDataCoinAmount">Amount</h4>
                </div>
                {
                    DataUsers.map(data => {
                        return (
                            <div className="DataUserDataCoin">
                                <img src={data.tokenImage} className = 'TokenImg' alt='TokenImg'/>
                                <h4 className='tokenNameUser'>{data.tokenname}</h4>
                                <h5 className='tokenSymbolUser'>{data.tokenSymbol}</h5>
                                <h4 className='amountTokenUser'>{data.amount.toLocaleString('en-US',{ minimumFractionDigits: 2 })}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserPage