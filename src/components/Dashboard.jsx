import React, { useState, useEffect } from 'react'
import UserResults from "./UserResults"
<<<<<<< HEAD:src/components/Dashboard.jsx
import axios from 'axios'
import { Row } from 'react-bootstrap'
=======
import axios from "axios";
import { Row } from "react-bootstrap";


>>>>>>> 38758d8ea7dff1903afadcaa7e6775a2e88ec032:src/Dashboard.js

function Dashboard () {
    const [userResults, setUserResults] = useState([])

    useEffect(() => {
        const getAllUsersResults = async () => {
            const res = await axios.get('http:localhost:5000')
            setUserResults(res.data);
            console.log(userResults);
        }
        getAllUsersResults()
    }, [])


    return (
        <div className="container">
            <Row>
                {userResults.map((result) => (
                    <UserResults key={result.id} result={result} />
                )
                )}
            </Row>
        </div>

    )
}

export default Dashboard

