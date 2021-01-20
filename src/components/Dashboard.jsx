import React, { useState, useEffect } from 'react'
import UserResults from "./UserResults"
import axios from 'axios'
import { Row } from 'react-bootstrap'

function Dashboard () {
    const [userResults, setUserResults] = useState([])

    useEffect(() => {
        const getAllUsersResults = async () => {
            const res = await axios.get('http:localhost')
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

