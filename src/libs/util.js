const BASE_URL = 'http://localhost:3001'

const signup = async( firstName, lastName, email, phone, password, confirmPassword ) =>{
    const fullName = `${firstName} ${lastName}`
    let returnResponse
    try{
        const response = await fetch(`${BASE_URL}/api/users/sign-up`,{
            method: 'POST',
            credentials: "include",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullName, email, phone, password,confirmPassword })
        })
            returnResponse = response.json()
            const result = await returnResponse
        if (!response.ok){
            throw new Error ('invalid form') 
        } else {
            return result
        }
    } catch (err){ 
        return await returnResponse
    }
}



export { signup }
