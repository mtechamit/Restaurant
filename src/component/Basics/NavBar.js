import React from 'react'

const NavBar = ({filterItem}) => {
    return (
        <>
                <nav className="navBarTop">
                <ul>
                    <li 
                    onClick={() => filterItem("Breakfast")}> 
                    Breakfast1</li>
                    <li onClick={() => filterItem("Lunch")}>Lunch</li>
                    <li onClick={() => filterItem("Evening")}>Evening</li>
                    <li onClick={() => filterItem("Dinner")}>Dinner</li>
                    
                </ul>

            </nav>  
        </>
    )
}

export default NavBar
