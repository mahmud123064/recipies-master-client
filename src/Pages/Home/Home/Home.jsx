import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Recipies from '../../Recipies/Recipies';

const Home = () => {

    const [recipiesData, setRecipiesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then((data) => setRecipiesData(data))

    }, []);

    return (
        <div className = "recipies">
            {/* //////////////////////////////////// */}
            {
                recipiesData.map(recipieData => <Recipies
                key = {recipieData.id}
                recipieData ={recipieData} 
                >
                    {/* <Card >
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>{recipieData.chef_name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Link><Button>Recipie Details</Button></Link>

                        </Card.Body>
                    </Card> */}
                </Recipies>
                )
            }

        </div>
    );
};

export default Home;