import React from 'react';
import EmptyProducts from './EmptyProducts/EmptyProducts';
import Products from './Products/Products';


const Content = () => {
    return (
        <div className='container__wrap__content'>
            <EmptyProducts/>
            {/* <Products/> */}
        </div>
    )
}


export default Content