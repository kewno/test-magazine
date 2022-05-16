import React from 'react';
import Product from '../../../ui/Product/Product';


const Products = ({products, ...props}) => {
    return (
        <div className='products'>
            {products.map(el => {
                return <Product key={el.id} src={el.img} name={el.name} price={el.price} textButton='Добавить в корзину' options={el.props} reviews={el.reviews}/>
            })}
        </div>
    )
}


export default Products