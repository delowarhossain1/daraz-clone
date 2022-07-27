import React from 'react';
import { Link } from 'react-router-dom';

const NavbarMenu = ({link, text}) => {
    return (
        <>
           <Link to={link} className='text-xs font-normal uppercase border-b border-transparent hover:border-black'>{text}</Link>
        </>
    );
};

export default NavbarMenu;