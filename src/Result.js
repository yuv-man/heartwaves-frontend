import React, { useState } from 'react'

export default function Result(props) {



    return (
        <div className="container w-50 ">
            <Card >
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title> </Card.Title>
                    <Card.Img variant="top" id="petsPhoto" src={pet.picture} alt={pet.name} className="w-100 " />
                    <Card.Text> </Card.Text>
                    <Card.Text> </Card.Text>
                    <Card.Text></Card.Text>
                    <Card.Text></Card.Text>
                    <Card.Text></Card.Text>
                    <Link to="/mypets" >
                        <Button className="button"  > Back </Button>
                    </Link>
                    <Button className="m-3 button">  </Button>
                    <Button className="m-3 button" >  </Button>
                </Card.Body>
            </Card>

        </div>
    )
}

