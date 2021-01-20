import React, { useState } from 'react'
import UserResults from "./UserResults"

export default function Dashboard () {
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

