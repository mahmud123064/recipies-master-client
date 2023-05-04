import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipiesInfo from '../RecipiesInfo/RecipiesInfo';

const RecipiesDetails = () => {

    const { id } = useParams();
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allData/${id}`)
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [])
    return (
        <div>
           
        </div>
    );
};

export default RecipiesDetails;