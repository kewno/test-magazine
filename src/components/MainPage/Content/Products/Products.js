import React, {useState} from 'react';
import PopUp from '../../../ui/PopUp/PopUp';
import Product from '../../../ui/Product/Product';


const Products = ({products, ...props}) => {
    let [checkPopUp, setCheckPopUp] = useState(false);
    let [idProduct, setIdProduct] = useState(-1);
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
                        textButton='Добавить в корзину' 
                        options={el.props} 
                        reviews={el.reviews}/>
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