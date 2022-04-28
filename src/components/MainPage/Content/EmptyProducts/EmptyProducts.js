import React from 'react';


const EmptyProducts = () => {
    return (
        <div className='empty-products-wrap'>
            <div className='empty-products'>
                <img className='empty-products__picture' src={require('../../../../img/basket-big.png')}/>
                <h3 className='empty-products__text'>В данной категории товаров пока нет</h3>
            </div>
        </div>
    )
}


export default EmptyProducts