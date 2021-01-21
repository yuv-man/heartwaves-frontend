import React, { useState, useContext, useEffect } from 'react'
import { HeartContext } from '../libs/HeartContext'
import { useHistory } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import { Modal, Button, Form } from "react-bootstrap";
import { signup } from '../libs/util'
import "./homePage.css";

function Signup() {
  const { setIsLogin, errorMessage, setErrorMessage, 
        setFirstName, loading, setLoading } = useContext(HeartContext);
  const [ userProfile, setUserProfile ] = useState({firstName: '', 
        lastName: '',  phone: '', password:'', email:'', confirmPassword: ''});
  const [ isOpen, setIsOpen ] = useState( false );
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
      setUserProfile({firstName: '', lastName: '', phone: '',
              password:'', email:'', confirmPassword:''});
      setErrorMessage( false )
  }

  const handleModalSubmit = async(event) => {
      event.preventDefault();
          setLoading( true )
          const result = await signup( 
            userProfile.firstName, userProfile.lastName,
            userProfile.email, userProfile.phoneNumber, userProfile.password,
            userProfile.confirmPassword)
          if(result.errors){
            console.log(result)


          setLoading(false)
      } else {
        console.log(result)
        setIsOpen( false )
        setIsLogin( true )
        setUserProfile({firstName: '', lastName: '', phoneNumber: '',
        password:'', email:'', confirmPassword:''});
        history.push('/')
      }
  }

  useEffect(() => {
      setErrorMessage( false )
  }, [])

    return (
      <div>
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
                  required
                  value={userProfile.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group id="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
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
                  name="password"
                  value={userProfile.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group id="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  className="inputs"
                  name="confirmPassword"
                  type="password"
                  value={userProfile.confirmPassword}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group id="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  className="inputs"
                  type="tel"
                  name="phoneNumber"
                  value={userProfile.phoneNumber}
                  required
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                className="sign-up "
                id="sign-up"
                type="submit"
                onClick={(event) => {
                  handleModalSubmit(event);
                }}
                value="Sign Up"
              >
                Log In
              </Button>
              {{message}? <h3 className='error' >{message}</h3>: null}
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );       
}

export default Signup

