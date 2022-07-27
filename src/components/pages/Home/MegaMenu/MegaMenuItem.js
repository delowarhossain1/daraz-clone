import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import "./MegaMenu.css";

const MegaMenuItem = ({menu}) => {
    const {item, subItems, link} = menu;

    if(subItems.length){
        return (
            <>
                <li className='main-mega-menu'>
                    <div className='hover:bg-[#F5F5F5] py-1 px-2 duration-150 flex items-center justify-between cursor-pointer'>
                        <span className='text-sm'>{item}</span>
                        <FontAwesomeIcon icon={faAngleRight} className='angle-icon' />
                    </div>

                    <ul className='sub-mega-menu h-full z-10'>
                        {
                           subItems?.map(subItem => (
                            <li key={subItem.id}>
                                <Link to={subItem.link}>{subItem.item}</Link>
                            </li>
                           )) 
                        }
                    </ul>
                </li>
            </>
        );
    }
    else {
        return (
            <li>
                <Link to={link}>{item}</Link>
            </li>
        )
    }
};

export default MegaMenuItem;