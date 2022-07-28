import React from 'react';
import Categories from './Categories/Categories';
import FlashSale from './FlashSale/FlashSale';
import Slider from './Slider/Slider';
import Categori from './Categori/Categori';
import JustForYou from './JustForYou/JustForYou';

const Home = () => {
    return (
        <>
           <Slider /> 
           <Categori />
           <FlashSale />
           <Categories />
           <JustForYou />
        </>
    );
};

export default Home;