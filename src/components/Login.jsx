import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import { HeartContext } from "../libs/HeartContext";
import { useHistory } from 'react-router-dom'
import "./homePage.css";

function Login() {
  const { setIsLogin, loading, setLoading } = useContext(HeartContext);
  const [modalLogIn, setModalLogIn] = useState(false);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const history = useHistory()
  const BASE_URL = 'http://localhost:3001'   
    
  const openModalLogIn = () => setModalLogIn(true);

  const handleClose = () => setModalLogIn(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
      const response = await fetch(`${BASE_URL}/api/users/sign-in`,{
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password})
      });
      if(response.ok){
        localStorage.setItem("token", response.data);
      }
      setModalLogIn(false);
      setIsLogin(true)
    //   history.push("/");
  };

  return (
    <>
      <Button
        className="button-log-sign btn btn-primary my-2 my-sm-0 mx-3"
        type="button"
        onClick={openModalLogIn}
      >
        Log In
      </Button>
      <Modal show={modalLogIn} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Log In</Modal.Title>
          <Button variant="light" onClick={handleClose} type="button">
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Button
              onClick={handleSubmit}
              className="log-sign"
              type="submit"
            >
              Log In{" "}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
