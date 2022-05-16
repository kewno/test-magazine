import React, {useState} from 'react';


const CharacteristicsElem = ({name, value, ...props}) => {
    
    //let [selectedTab, setActiveTab] = useState('description');

    return (
        <div className='characteristics-elem'>
            <p className='characteristics-elem__name'>{name}</p>
            <p className='characteristics-elem__value'>{value}</p>
        </div>
    )
}


export default CharacteristicsElem