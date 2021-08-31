import React, { useState } from 'react'
import './style.css';
import MenuApi from "./menuApi";
import MenuCard from './MenuCard';
import NavBar from './NavBar';

const uniqueList = [...new Set(MenuApi.map((currEle) => {
    return currEle.category;
})),];

console.log(uniqueList);

const Restaurant = () => {

    const [menuData, setMenuData] = useState(MenuApi);
    // console.log(menuData);
    const filterItem = (categoryParameter) => {
        const updatedList = MenuApi.filter((curElem1) => {
            return curElem1.category === categoryParameter;

        });

        setMenuData(updatedList);

    };

    return (
        <>
            <NavBar filterItem={filterItem} />
            <MenuCard menuDataAttr={menuData} />

        </>
    )
}

export default Restaurant
