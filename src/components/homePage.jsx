import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Home from './Home';
import Result from './Result'
import Dashboard from './Dashboard'
import Login from './Login'
import SignUp from './Signup'
import heartLogo from '../images/heartLogo.png'
import { HeartContext } from '../libs/HeartContext'
import './homePage.css'
import UserResults from './UserResults';


function HomePage (){

    const [ loading , setLoading ] = useState( false );
    const [ isLogin, setIsLogin ] = useState( true );
    const [ currentUser, setCurrentUser ] = useState();
    const [ errorMessage, setErrorMessage ] = useState( false )
    const [ firstName, setFirstName ] = useState('')

    const Logout = () => {
        setIsLogin( false );
        // localStorage.setItem('token', null)
    }

    return (
        <Router>
        <HeartContext.Provider value = {{ isLogin, setIsLogin, 
            currentUser, setCurrentUser, errorMessage, 
            setErrorMessage, firstName, setFirstName, loading , setLoading }}>
        <nav className = 'nav-bar'>
        <div className = 'nav-list'>
            <div className='left-header'>
                <img className='heart-logo' src={heartLogo} alt='heart waves'/>
                <h2 className='text-logo'>Heart Waves</h2>
            </div>
            <div className='right-header'>
                <div>
                    <Link to="/home">Home</Link>
                </div>
                {isLogin ? (
                    <div>
                    <Link to="/result">Result</Link>
                    </div>
                ) : null}
                {isLogin ? 
                    <div>
                    <Link to="/dashboard">Dashboard</Link>
                </div> : null}
            {isLogin? <input className='sign-up' type='submit' 
                value='Log out' onClick={Logout}/> : <div>
                    <Login/>
                    <SignUp />
                </div> 
            }
            </div>
            </div>
        </nav>
            <Switch>
                <Route path="/results">
                    <Result />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </HeartContext.Provider>
    </Router>
    );
}

export default HomePage;