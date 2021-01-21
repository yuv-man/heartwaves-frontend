const BASE_URL = 'http://localhost:3001'

const signup = async( firstName, lastName, email, phoneNumber, password) =>{
    const response = await fetch(`${BASE_URL}/api/user/sign-up`,{
        method: 'POST',
        credentials: "include",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, phoneNumber, password })
    })
    let returnResponse
        returnResponse = response.json()
        const result = await returnResponse
    if (!response.ok){
        return result
    } else {
        const userId = [result]
        return userId
    }
}

export { signup }
