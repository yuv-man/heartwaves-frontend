import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SignUp from "./Signup";
import heartLogo from "../images/heartLogo.png";
import { HeartContext } from "../libs/HeartContext";
import "./homePage.css";
import { Nav, Navbar, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const [firstName, setFirstName] = useState("");

  const Logout = () => {
    setIsLogin(false);
    // localStorage.setItem('token', null)
  };

  return (
    <>
      <Router>
        <HeartContext.Provider
          value={{
            isLogin,
            setIsLogin,
            currentUser,
            setCurrentUser,
            errorMessage,
            setErrorMessage,
            firstName,
            setFirstName,
            loading,
            setLoading,
          }}
        >
          <div className=" container-fluid w-100  ">
            <div className="row p-5">
              <Navbar fixed="top" className="mt-4">
                <Nav className="collapse navbar-collapse d-flex justify-content-between">
                  <div className="left-header">
                    <Image
                      className="heart-logo"
                      src={heartLogo}
                      alt="heart waves"
                      width="4%"
                    ></Image>
                    <h2 className="text-logo">Heart Waves</h2>
                  </div>
                  <div className="right-header">
                    {/* <div> */}
                    <Link className=" nav" to="/home">
                      Home
                    </Link>
                    {/* </div> */}
                    {isLogin ? (
                      // <div>
                      <Link className=" nav" to="/result">
                        Result
                      </Link>
                    ) : // </div>
                    null}
                    {isLogin ? (
                      // <div>
                      <Link className=" nav" to="/dashboard">
                        Dashboard
                      </Link>
                    ) : // </div>
                    null}
                    {isLogin ? (
                      <Button
                        className="sign-up"
                        type="submit"
                        onClick={Logout}
                      >
                        Log out{" "}
                      </Button>
                    ) : (
                      <form className="form-inline my-2 my-lg-0 float-end">
                        <Login />
                        <SignUp />
                      </form>
                    )}
                  </div>
                </Nav>
              </Navbar>
            </div>
          </div>
          {/* <nav className = 'nav-bar'>
        <div className = 'nav-list'>
            <div className='left-header'>
                <img className='heart-logo' src={heartLogo} alt='heart waves'/> */}
          {/* <h2 className='text-logo'>Heart Waves</h2>
            </div>
            <div className='right-header'>
                <div> */}
          {/* <Link to="/home">Home</Link>
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
        </nav> */}
          <Switch>
            <Route path="/result">
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
    </>
  );
}

export default HomePage;
