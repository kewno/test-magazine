import React, {useState} from 'react';
import CharacteristicsElem from '../CharacteristicsElem';


const Characteristics = ({options, ...props}) => {
    //debugger
    //let [selectedTab, setActiveTab] = useState('description');

    return (
        <div className='characteristics'>
            {/* {options.map(el => {
                return <CharacteristicsElem name={'Высота'} value={'50 мм'}/>
            })} */}
            <CharacteristicsElem name={options.height.caption} value={`${options.height.value} ${options.height.measure}`}/>
            <CharacteristicsElem name={options.length.caption} value={`${options.length.value} ${options.length.measure}`}/>
            <CharacteristicsElem name={options.width.caption} value={`${options.width.value} ${options.width.measure}`}/>
            {/* <CharacteristicsElem name={'Ширина'} value={'55 мм'}/>
            <CharacteristicsElem name={'Красота'} value={'60 мм'}/> */}
        </div>
    )
}


export default Characteristics