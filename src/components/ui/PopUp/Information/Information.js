import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tab from '../../Tabs/Tab/Tab';
import Tabs from '../../Tabs/Tabs';
import Characteristics from './Characteristics/Characteristics/Characteristics';
import Description from './Description/Description';
import InformationHead from './InformationHead/InformationHead';
import Reviews from './Reviews/Reviews';
import SendReviews from './SendReviews/SendReviews';


const Information = ({selectedTab, setActiveTab, src, name, price, reviews, options, ...props}) => {

    let product = useSelector((state) => state.main.activeProduct)
    //console.log(product)
    return (
        <div className='information'>
            <InformationHead src={product.img} name={product.name} price={product.price}/>
            <Tabs selectedTab={selectedTab} changeTab={setActiveTab}>
                <Tab name="description" title="Описание">
                    <Description>{product.descr}</Description>
                </Tab>
                <Tab name="characteristics" title="Характеристики">
                    <Characteristics options={product.props}/>
                </Tab>
                <Tab name="reviews" title="Отзывы">
                    <Reviews reviews={product.reviews}/>
                </Tab>
                <Tab name="send-reviews" title="Оставить отзыв">
                    <SendReviews/>
                </Tab>
            </Tabs>
        </div>
    )
}


export default Information