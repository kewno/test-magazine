import React, { useEffect, useState } from 'react';
import Button from '../ui/Button/Button';
import '../../styles/kitStyle.scss';
import PopUp from '../ui/PopUp/PopUp'
import Input from '../ui/Input/Input'
import Product from '../ui/Product/Product';
import Tab from '../ui/Tab/Tab';

const UiKit = (props) => {
    let [textOne, setTextOne] = useState('');
    let [textTwo, setTextTwo] = useState('');
    let [checkPopUp, setCheckPopUp] = useState(false);

    return (
        <div className='container'>
            <div className='container__inputs'> 
                <Input type='text' value={textOne} onChange={e => setTextOne(e.target.value)} {...props}>Имя</Input>
                <Input type='text' value={textTwo} onChange={e => setTextTwo(e.target.value)} textError='Обязательное поле'>Имя</Input>
            </div>
            
            {/* <div className='container__tab'>

            </div> */}
            <Tab/>
            <div className='container__buttons'>
                <Button href='/'>
                    Добавить в корзину
                </Button>
                <Button>
                    . . .
                </Button>
                <Button disable href='/'>
                    Добавить в корзину
                </Button>
            </div>

            <div>
                <Product src={'product.png'} name='Стул рабочий' price='6 000 ₽' textButton='Добавить в корзину'/>
            </div>

            <div className='container__pop-up'>
                <Button href='/' func={() => setCheckPopUp(true)}>
                    Открыть
                </Button>
                {/* <PopUp close={setCheckPopUp} status={checkPopUp} text='Оформить заказ'>
                    <div className='pop-up'>
                        <div className='pop-up__header'>
                            <p className='pop-up__text'>{props.text}</p>
                            <img className='pop-up__picture' onClick={() => setCheckPopUp(false)} src={require('../../img/close.png')}/>
                        </div>
                    </div>
                </PopUp> */}
                <PopUp toggle={setCheckPopUp} status={checkPopUp} text='Оформить заказ' {...props}/>
            </div>

        </div>
    )
}


export default UiKit