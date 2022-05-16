import React from 'react';


const EmptyPopUp = ({children, type, src, ...props}) => {
    //debugger
    //let image = `../../../../img/${src}`;
    return (
        <div className='pop-up-empty-products-wrap'>
            <div className='pop-up-empty-products'> 
               <img className={`pop-up-empty-products__picture ${type}`} src={require(`../../../../img/${src}`)}/>  {/* require('../../../../img/basket-big.png') */}
                <h3 className='pop-up-empty-products__text'>{children}</h3>
            </div>
        </div>
    )
}


export default EmptyPopUp