import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';


const CheckoutProducts = ({...props}) => {

    let idOrderProducts = useSelector((state) => state.main.orderProducts)

    let products = useSelector((state) => state.main.products.filter(el => {
        let a = idOrderProducts.indexOf(el.id)  
        if (idOrderProducts.indexOf(el.id) == -1) return false  
        return true
    }))


    //debugger
    return (
        <div className='products-checkout'>
            <h3 className='products-checkout__headline'>В корзине:</h3>
            <div className='products-checkout__wrap-products'>
                {products.map(el => {
                    //debugger
                    return <CheckoutProduct key={el.id} id={el.id} name={el.name} image={el.img} price={el.price}/>
                })}
            </div>
        </div>
    )
}


export default CheckoutProducts