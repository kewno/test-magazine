import React from 'react';
import Icon from '../Icon/Icon';
import TextBold from '../TextBold copy/TextBold';
import TextNormal from '../TextNormal/TextNormal';
import Picture from '../Picture/Picture';
import TextNormalBold from '../TextNormalBold/TextNormalBold';
import Menu from '../Menu/Menu';

const Information = () => {
    return (
        <div className='information'>
            <Icon/>
            <div className='information__content'>
                <Picture/>
                <TextNormalBold/>
                <Menu/>
                <div className='information__content__menu-content'>
                    <TextNormal/>

                    
                </div>
            </div>
        </div>
    )
}


export default Information