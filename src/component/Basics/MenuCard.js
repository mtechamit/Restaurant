import React from 'react'

const MenuCard = ({ menuDataAttr }) => {
  
    console.log(menuDataAttr);
    return (
        <div>

            {menuDataAttr.map((curElement) => {

            const { id , category, name, description, image } = curElement; 

                return(
                    <div>
                    <div className="card-container" key={id} >
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number">{id}</span>
                                <span className="author">{category}</span>
                                <h2>{name}</h2>
                                <p className="desc">{description}
                                </p>
                                <div className="read">Read</div>
                            </div>

                            <img src={image} />
                            <span className="order">Order Now</span>

                        </div>
                    </div>
                </div>
                );
               
            })}



        </div>
    )
}

export default MenuCard
