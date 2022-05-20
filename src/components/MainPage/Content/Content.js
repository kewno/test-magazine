import React from 'react';
import EmptyProducts from './EmptyProducts/EmptyProducts';
import Products from './Products/Products';
import { useSelector } from 'react-redux';

const Content = ({subcategory, toggleOrderProducts, ...props}) => {
    let products = useSelector((state) => state.main.data[+subcategory]) //.filtre(el => el)
    //debugger
    return (
        <div className='container__wrap__content'>
            {products ? 
                <Products toggleOrderProducts={toggleOrderProducts} products={products}/>
                :
                <EmptyProducts/>
            }
        </div>
    )
}


export default Content