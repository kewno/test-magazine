import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';


const CheckoutProducts = ({...props}) => {
    // let idOrderProducts = useSelector((state) => state.main.orderProducts)
    // let products = useSelector((state) => state.main)

    // console.log('products ' + products)
    // let orderProducts = products.filter(el => {
    //     debugger
    //     console.log(1)
    //     idOrderProducts.includes(el.id)
        
    // });
    // console.log('orderProducts ' + orderProducts)

    return (
        <div className='products-checkout'>
            <h3 className='products-checkout__headline'>В корзине:</h3>
            <div className='products-checkout__wrap-products'>
                {/* {orderProducts.map(el => {
                    return <CheckoutProduct />
                })} */}
            </div>
        </div>
    )
}


export default CheckoutProducts