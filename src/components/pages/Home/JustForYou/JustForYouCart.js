import React from 'react';
import RatingStar from '../../../shared/RatingStar/RatingStar';
import Taka from '../../../shared/TakaSymbol/Taka';

const JustForYouCart = () => {

    return (
        <div className='p-3 bg-white rounded cursor-pointer hover:shadow-lg'>
            <img src="https://static-01.daraz.com.bd/p/1da10946dea6c3a0d26666361b563981.jpg_400x400q75-product.jpg" alt="product" className='mb-5' />
            
            <div>
                <h2 className='text-sm mb-2'>Haylou RS4 Plus Smartwatch with AMOLED </h2>
                <h3 className='text-xl drz-clr mb-1'>$120</h3>
                <h4 className='text-sm text-gray-400 mb-1'><strike>$10</strike> $110</h4>
                <div>
                    <RatingStar ratings={3.01} />
                </div>
                <i class="fa-solid fa-bangladeshi-taka-sign"></i>
            </div>
        </div>
    );
};

export default JustForYouCart;