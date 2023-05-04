import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Recipies from '../../Recipies/Recipies';
import Banner from '../../../Pages/Banner/Banner';
import Marquee from "react-fast-marquee";

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

            <div className=''>
               <h3> <Marquee speed={100} className='bg-secondary p-3 text-white-50'>
                    50% Off to our all Food Items
                </Marquee></h3>
            </div>
            <div>
                <h3 className="mt-3 mb-3 text-center" >Our chef details</h3>
            </div>
            {/* /////////////// Create a Card ///////////////////// */}
            <div className="recipies">
                {
                    recipiesData.map(recipieData => <Recipies
                        key={recipieData.id}
                        recipieData={recipieData}
                    >
                    </Recipies>
                    )
                }
            </div>

        </div>
    );
};

export default Home;