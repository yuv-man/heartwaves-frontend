import React, { useState, useContext, useEffect } from 'react'
// import Modal from 'react-modal'
import { HeartContext } from '../libs/HeartContext'
import { useHistory } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import { Modal, Button, Form } from "react-bootstrap";
import "./homePage.css";

// import heartSignup from '../images/heartSignup.png'

function Signup() {
    const { setIsLogin, errorMessage, setErrorMessage, 
        setFirstName, loading, setLoading } = useContext(HeartContext);
const [ userProfile, setUserProfile ] = useState({firstName: '', lastName: '', phoneNumber: '',
    password:'', email:'' });
const [ isOpen, setIsOpen ] = useState( false );
const [ confirmPassword, setConfirmPassword ] = useState('');
const [ message, setMessage ] = useState('')
const history = useHistory()

const handleChange = (event) => {    
    setUserProfile((userProfile) => ({ ...userProfile, [event.target.name]: event.target.value }))
}

const handleModal = () => {
    setIsOpen( true )
}

const handleModalClose = () => {
    setIsOpen( false )
    // event.preventDefault();
    // setUserProfile({firstName: '', lastName: '', phoneNumber: '',
    //         password:'', email:''});
    // setConfirmPassword('');
    // setErrorMessage( false )
}

// const checkPassword = async () => {
//     if(userProfile.password === confirmPassword){
//         const result = await signup( 
//             userProfile.firstName, userProfile.lastName,
//             userProfile.email, userProfile.phoneNumber, userProfile.password)
//         if(typeof result === 'object'){
//             console.log(result[0])
//             createToken( userProfile.email );
//             localStorage.setItem('currentUser', result[0])
//             setFirstName(userProfile.firstName)
//             setIsOpen( false )
//             setIsLogin( true )
//             setUserProfile({firstName: '', lastName: '', phoneNumber: '',
//                 password:'', email:''});
//             setConfirmPassword('');
//             history.push('/')

//         }else{
//             setMessage(result)
//             setErrorMessage( true )
//         }
//     } else {
//         setMessage('Confirmation password is not correct')
//         setErrorMessage( true )
//     }
// }

const handleModalSubmit = (event) => {
    event.preventDefault();
    if(!userProfile.firstName){
        setMessage('first name is missing')
        setErrorMessage( true )
    } else if (!userProfile.lastName){
        setMessage('last name is missing')
        setErrorMessage( true )
    } else if (!userProfile.phoneNumber){
        setMessage('phone number is missing')
        setErrorMessage( true )
    } else if (!userProfile.email){
        setMessage('email is missing')
        setErrorMessage( true )
    } else if (!userProfile.password){
        setMessage('password is missing')
        setErrorMessage( true )
    } else {
        setLoading( true )
        // checkPassword()
        setLoading(false)
    }
    console.log(userProfile);
    setIsOpen(false);
}

useEffect(() => {
    setErrorMessage( false )
}, [])

    return (
      <>
        <Button
          className="modal-button btn btn-primary my-2 my-sm-0 mr-4"
          type="button"
          onClick={handleModal}
        >
          Sign Up{" "}
        </Button>
        <ClipLoader loading={loading} />
        <Modal show={isOpen} onHide={handleModalClose}>
          <Modal.Header>
            <Modal.Title>Create Account</Modal.Title>
            <Button variant="light" onClick={handleModalClose} type="button">
              x
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group id="firsName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  //   placeholder="Your First Name..."
                  required
                  value={userProfile.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group id="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  //   placeholder="Your Last Name..."
                  name="lastName"
                  value={userProfile.lastName}
                  required
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="inputs"
                  type="email"
                  //   placeholder="Your Email..."
                  name="email"
                  value={userProfile.email}
                  required
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="inputs"
                  type="password"
                  //   placeholder="Your password."
                  name="password"
                  value={userProfile.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group id="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  className="inputs"
                  type="password"
                  //   placeholder="confirm password."
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </Form.Group>
              <Form.Group id="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  className="inputs"
                  type="tel"
                  //   placeholder="Your Phone number..."
                  name="phoneNumber"
                  value={userProfile.phoneNumber}
                  required
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                className="button-log-sign "
                id="sign-in"
                type="submit"
                onClick={(event) => {
                  handleModalSubmit(event);
                }}
                value="Sign Up"
              >
                Log In
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        {/* <div className="sign-up-form">
          <input
            className="sign-up"
            type="submit"
            onClick={(event) => {
              handleModal(event);
            }}
            value="Sign Up"
          />

          <Modal
            style={{
              content: {
                width: "60%",
                borderRadius: "20px",
                display: "flex",
                flexFlow: "row nowrap",
                alignItems: "center",
              },
            }}
            isOpen={isOpen}
          >
            <ClipLoader loading={loading} />
            <form className="right-side">
              <input
                className="close"
                type="submit"
                onClick={(event) => {
                  handleModalClose(event);
                }}
                value="x"
              /> */}
        {/* <h1 className="sign-title">Create Account</h1>
              <div className="names">
                <input
                  id="first-name"
                  type="text"
                  name="firstName"
                  placeholder="Your First Name..."
                  required
                  value={userProfile.firstName}
                  onChange={handleChange}
                /> */}
        {/* <input
                  type="text"
                  placeholder="Your Last Name..."
                  name="lastName"
                  value={userProfile.lastName}
                  required
                  onChange={handleChange}
                /> */}
        {/* </div> */}
        {/* <input
                className="inputs"
                type="tel"
                placeholder="Your Phone number..."
                name="phoneNumber"
                value={userProfile.phoneNumber}
                required
                onChange={handleChange}
              />
              <input
                className="inputs"
                type="email"
                placeholder="Your Email..."
                name="email"
                value={userProfile.email}
                required
                onChange={handleChange}
              />
              <input
                className="inputs"
                type="password"
                placeholder="Your password."
                name="password"
                value={userProfile.password}
                onChange={handleChange}
              />
              <input
                className="inputs"
                type="password"
                placeholder="confirm password."
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              {errorMessage ? <h3 className="error">{message}</h3> : null}
              <input
                id="sign-in"
                type="submit"
                onClick={(event) => {
                  handleModalSubmit(event);
                }}
                value="Sign Up"
              />
            </form>
          </Modal>
        </div> */}
      </>
    );       
}

export default Signup

