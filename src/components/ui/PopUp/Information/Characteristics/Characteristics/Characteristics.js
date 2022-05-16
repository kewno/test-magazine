import React, {useState} from 'react';
import CharacteristicsElem from '../CharacteristicsElem';


const Characteristics = ({options, ...props}) => {
    //debugger
    //let [selectedTab, setActiveTab] = useState('description');

    return (
        <div>
        {options ? <div className='characteristics'>
        <CharacteristicsElem name={options.height.caption} value={`${options.height.value} ${options.height.measure}`}/>
        <CharacteristicsElem name={options.length.caption} value={`${options.length.value} ${options.length.measure}`}/>
        <CharacteristicsElem name={options.width.caption} value={`${options.width.value} ${options.width.measure}`}/>
</div> : null}
</div>
    )
}


export default Characteristics