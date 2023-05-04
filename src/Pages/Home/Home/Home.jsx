import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Recipies from '../../Recipies/Recipies';
import Banner from '../../../Pages/Banner/Banner';

const Home = () => {

    const [recipiesData, setRecipiesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then((data) => setRecipiesData(data))

    }, []);
    

    return (
        <div>
            <Banner></Banner>
            <div>
                <h3 className = "mt-3 mb-3 text-center" >Our chef details</h3>
            </div>
            {/* /////////////// Create a Card ///////////////////// */}
           <div  className = "recipies">
           {
                recipiesData.map(recipieData => <Recipies
                key = {recipieData.id}
                recipieData ={recipieData} 
                >
                </Recipies>
                )
            }
           </div>

        </div>
    );
};

export default Home;