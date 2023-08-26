import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <>
        <section className='main-card--cointainer'>
            {menuData.map((curEle) => {
                return (
                    <>
                        <div className='card-container'>
                            <div className='card'>
                                <div className='card-body'>
                                    <span className='card-number card-circle subtle'>{curEle.id}</span>
                                    <span className='card-author subtle'>{curEle.category}</span>
                                    <h2 className='card-title'>{curEle.name}</h2>
                                    <span className='card-description subtle'>{curEle.description}</span>
                                    <div className='card-read'>Read</div>
                                </div>
                                <img src={curEle.image} alt='' className='card-media'></img>
                                <div className='card-tag subtle'>Order Now</div>
                                <div className='price'>{curEle.price}</div>

                            </div>
                        </div>

                    </>
                );
            })}

        </section> 
        </>
    );
}

export default MenuCard