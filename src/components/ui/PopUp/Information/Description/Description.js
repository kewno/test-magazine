import React, {useState} from 'react';


const Description = ({children, ...props}) => {
    
    //let [selectedTab, setActiveTab] = useState('description');

    return (
        <div className='description'>
            <h4 className='description__text'>{children} </h4>
        </div>
    )
}


export default Description