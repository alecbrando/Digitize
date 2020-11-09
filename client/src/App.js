import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Cookies from "js-cookie"
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from './Redux/actions/authActions'
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from './Pages/LoginPage/LoginPage'


function App() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    useEffect(()=>{

        const generateSession = async () => {

                const res = await fetch("/api/session/token/refresh", {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'access': Cookies.get("access_token_cookie")
                    },
                })
                if (res.ok) {
                    const data = await res.json()
                    dispatch(setUser(data))
                }
            }
            generateSession()
        }
    ,[])

  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
