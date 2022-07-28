import React from 'react';

const CategoriCart = ({category}) => {

    const {img, categori} = category;
    return (
        <div className='flex flex-col items-center  p-2 border cursor-pointer hover:shadow-lg'>
            <img src={img} alt="categories" className=' w-20'/>
            <h3 className='text-center'>{categori}</h3>
        </div>
    );
};

export default CategoriCart;