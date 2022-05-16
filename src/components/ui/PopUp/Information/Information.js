import React, {useState} from 'react';
import Tab from '../../Tabs/Tab/Tab';
import Tabs from '../../Tabs/Tabs';
import Characteristics from './Characteristics/Characteristics/Characteristics';
import Description from './Description/Description';
import InformationHead from './InformationHead/InformationHead';
import Reviews from './Reviews/Reviews';
import SendReviews from './SendReviews/SendReviews';


const Information = ({selectedTab, setActiveTab, src, name, price, reviews, options, ...props}) => {
    //debugger
    //console.log(selectedTab)
    return (
        <div className='information'>
            <InformationHead src={src} name={name} price={price}/>
            <Tabs selectedTab={selectedTab} changeTab={setActiveTab}>
                <Tab name="description" title="Описание">
                    <Description>{`VIKING A3 - удобное кресло, которое станет удачным выбором 
                        для домашнего использования и для офиса. Кресло выдерживает нагрузку до 181 кг. 
                        Высота сиденья регулируется при помощи надежного механизма. Спинка качается, 
                        при желании ее можно прочно зафиксировать в вертикальном положении. Эргономичная 
                        конструкция помогает снизить нагрузку на мышцы и уменьшить усталость от долгой 
                        работы за компьютером. Кресло закреплено на прочной и устойчивой`}</Description>
                </Tab>
                <Tab name="characteristics" title="Характеристики">
                    <Characteristics options={options}/>
                </Tab>
                <Tab name="reviews" title="Отзывы">
                    <Reviews reviews={reviews}/>
                </Tab>
                <Tab name="send-reviews" title="Оставить отзыв">
                    <SendReviews/>
                </Tab>
            </Tabs>
        </div>
    )
}


export default Information