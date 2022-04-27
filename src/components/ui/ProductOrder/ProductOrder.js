import React from 'react';
import Picture from '../Picture/Picture';
import TextBold from '../TextBold copy/TextBold';
import TextNormal from '../TextNormal/TextNormal';


const ProductOrder = (props) => {
    return (
        <div className='product-order'>
            <Picture/>
                <div className='product-order__wrap-text'>
                    <TextNormal/>
                    <TextBold/>
                    <TextNormal/>
                </div>
        </div>
    )
}


export default ProductOrder