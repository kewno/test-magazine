import React, { useEffect, useState } from 'react';
import Button from '../ui/Button/Button';
import '../../styles/kitStyle.scss';
import PopUp from '../ui/PopUp/PopUp'
import Input from '../ui/Input/Input'
import Product from '../ui/Product/Product';
import Tabs from '../ui/Tabs/Tabs';
import Tab from '../ui/Tabs/Tab/Tab'
import Stars from '../ui/Stars/Stars';

const UiKit = (props) => {
    let [textOne, setTextOne] = useState('');
    let [textTwo, setTextTwo] = useState('');
    let [checkPopUp, setCheckPopUp] = useState(false);
    let [selectedTab, setActiveTab] = useState('characteristics');
    let [collSelected, setCollSelected] = useState(0);
    let [collSelectedEnter, setCollSelectedEnter] = useState(0);
    //console.log('selectedTab; ' + selectedTab);
    return (
        <div className='container'>
            <div>
                <Stars collSelected={collSelected} 
                       setCollSelected={setCollSelected}
                       collSelectedEnter={collSelectedEnter} 
                       setCollSelectedEnter={setCollSelectedEnter}
                />
            </div>

            <div className='container__inputs'> 
                <div className='wrap-input'>
                    <Input type='text' value={textOne} onChange={e => setTextOne(e.target.value)} {...props}>Имя</Input>
                </div>
                <div className='wrap-input'>
                    <Input type='text' value={textTwo} onChange={e => setTextTwo(e.target.value)} textError='Обязательное поле'>Имя</Input>
                </div>
            </div>
            
           <Tabs selectedTab={selectedTab} changeTab={setActiveTab}> {/*selectedTab={selectedTab} changeTab={setActiveTab} */}
                <Tab name="description" title="Описание">
                    Описание
                </Tab>
                <Tab name="characteristics" title="Характеристики">
                    Характеристики
                </Tab>
                <Tab name="reviews" title="Отзывы">
                    <p>третье</p>
                </Tab>
                <Tab name="send-reviews" title="Оставить отзыв">
                    <p>четвертое</p>
                </Tab>
            </Tabs>
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
                <Button add href='/'>
                    В корзине
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