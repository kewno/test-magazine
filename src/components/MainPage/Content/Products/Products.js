import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import PopUp from '../../../ui/PopUp/PopUp';
import Product from '../../../ui/Product/Product';


const Products = ({products, toggleOrderProducts, ...props}) => {
    let [checkPopUp, setCheckPopUp] = useState(false);
    let [idProduct, setIdProduct] = useState(-1);
    
    let orderProduct = useSelector(state => state.main.orderProducts)
    
    return ( 
        <div className='products'>
            {products.map(el => {
                
                return <Product 
                            key={el.id} 
                            id={el.id} 
                            src={el.img} 
                            name={el.name} 
                            price={el.price} 
                            setCheckPopUp={setCheckPopUp} 
                            setIdProduct={setIdProduct}
                            //textButton='Добавить в корзину'
                            toggleOrderProducts={toggleOrderProducts} 
                            options={el.props} 
                            reviews={el.reviews}
                            add={orderProduct.includes(el.id)}
                        />
            })}
            <PopUp
                type={'information'}
                status={checkPopUp}
                toggle={setCheckPopUp}
                idProduct={idProduct}          
                text='Информация' {...props}/>
        </div>
    )
}

{/* status={checkPopUp}
                name={name}
                price={price}
                src={src}
                reviews={reviews}
                options={options} */}
export default Products