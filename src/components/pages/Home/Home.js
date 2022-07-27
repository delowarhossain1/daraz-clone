import React from 'react';
import Categori from './Categori/Categori';
import FlashSale from './FlashSale/FlashSale';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <>
           <Slider /> 
           <Categori />
           <FlashSale />
        </>
    );
};

export default Home;