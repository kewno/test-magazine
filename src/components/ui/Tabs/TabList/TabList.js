import React from 'react';
import TabListElem from './TabListElem/TabListElem';


function TabList({ tabs, selectedTab, changeTab, ...props}) {
    let i = 1;
    return (
        <div className="container-tab">
            {tabs.map(({ name, title }) => 
                <TabListElem key={i++} name={name} title={title} selectedTab={selectedTab} changeTab={changeTab}/>
            )}
        </div>
    )
}

export default TabList