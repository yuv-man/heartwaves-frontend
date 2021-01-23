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
import "./mobile.css";
import { Nav, Navbar, Image, Button, NavDropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const [fullName, setFullName] = useState("");
  const [testResult, setTestResult] = useState()

  const Logout = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <Router>
        <HeartContext.Provider
          value={{
            isLogin,
            setIsLogin,
            currentUser,
            setCurrentUser,
            errorMessage,
            setErrorMessage, 
            fullName,
            setFullName,
            loading,
            setLoading,
            testResult, 
            setTestResult
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
                    <Link className=" nav" to="/home">
                      Home
                    </Link>
                    {isLogin ? (
                      <Link className=" nav" to="/result">
                        Result
                      </Link>
                    ) : null}
                    {isLogin ? (
                      <Link className=" nav" to="/dashboard">
                        Dashboard
                      </Link>
                    ) : null}
                    {isLogin ? (
                      <Button className="Logout" type="submit" onClick={Logout}>
                        Log out
                      </Button>
                    ) : (
                      <form className="form-inline my-2 my-lg-0 float-end">
                        <Login />
                        <SignUp />
                      </form>
                    )}
                  </div>
                  <div className="mobile-nav">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                        <NavDropdown
                          className="navDropdown"
                          title={<FaBars className="nav-icon" />}
                        >
                          <div className="navDropdown-box">
                            <Link className="mobile-link" to="/home">
                              {" "}
                              Home{" "}
                            </Link>
                            {isLogin ? (
                              <Link className=" mobile-link" to="/result">
                                {" "}
                                Result{" "}
                              </Link>
                            ) : null}
                            {isLogin ? (
                              <Link className=" mobile-link" to="/dashboard">
                                {" "}
                                Dashboard{" "}
                              </Link>
                            ) : null}
                          </div>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </div>
                </Nav>
              </Navbar>
            </div>
          </div>
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
    </div>
  );
}

export default HomePage;
