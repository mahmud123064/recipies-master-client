import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Recipies.css"

const Recipies = ({recipieData}) => {

    // const {chef_name,recipes,recipe_picture} = recipieData;
    return (
        <div className='m-3'>
             <Card  className='container  my-container'>
                        <Card.Img variant="top"  src = {recipieData?.chef_photo} />
                        <Card.Body>
                            <Card.Title>{recipieData?.chef_name}</Card.Title>
                            <Card.Text>
                              <p>  Experience: {recipieData.experience}</p>
                            </Card.Text>
                            <Card.Text>
                              <p>  Numbers of recipes: {recipieData?.number}</p>
                            </Card.Text>
                            <Card.Text>
                              <p>  Total Likes: {recipieData.like}</p>
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Link to={`/recipies/${recipieData?.id}`}><Button>Recipie Details</Button></Link>

                        </Card.Body>
                    </Card>
        </div>
    );
};

export default Recipies;