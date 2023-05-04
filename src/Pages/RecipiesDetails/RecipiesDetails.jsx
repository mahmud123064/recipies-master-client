import React, { useEffect, useState } from 'react';
import { useLoaderData, } from 'react-router-dom';
import'./RecipiesDetails.css'
import { Button } from 'react-bootstrap';


const RecipiesDetails = () => {

    // const { id } = useParams();

    const details = useLoaderData();
    console.log(details);
    // const [details, setDetails] = useState([])

    // useEffect(() => {
    //     fetch(`https://the-recipies-master-server.vercel.app/allData/${id}`)
    //     .then(res => res.json())
    //     .then(data => setDetails(data))
    // }, [])
    return (

        <div className='recepi-detels-conteinar'>
            <div className='p-5'>
                <img className='about-chef-img' src={details.chef_photo} alt="" />
                <h4><span>Chef Name: </span>{details.chef_name}</h4>
                <p> <span>Description:</span> {details.description}</p>
                <p><span>Like: </span>{details.like}</p>
                <p><span>Total Recipe:</span>{details.number}</p>
                <p><span>Experience:</span> {details.experience}</p>
                <Button variant="primary">Favorite</Button>
            </div>
            

        </div>
    );
};

export default RecipiesDetails;