import React, { useState,useContext } from 'react'

function Home() {

    const { isLogin, firstName } = useContext(DogContext);
    
    return (
        <div>
        <h1>hello world</h1>
        </div>
    )
}

export default Home