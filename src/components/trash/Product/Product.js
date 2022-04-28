import React from 'react';
import Button from '../Button/Button';
import Picture from '../Picture/Picture';
import TextNormalBold from '../TextNormalBold/TextNormalBold';


const Product = (props) => {
    return (
        <div className='product'>
            <Picture/>
            <div className='product__wrap-text-button'>
                <TextNormalBold/>
                <Button/>
            </div>
        </div>
    )
}


export default Product