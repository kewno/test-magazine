import React from 'react';
import TabListElem from './TabListElem/TabListElem';


function TabList({ tabs, selectedTab, changeTab, ...props}) {
    return (
        <div className="container-tab">
            {tabs.map(({ name, title }) => 
                <TabListElem name={name} title={title} selectedTab={selectedTab} changeTab={changeTab}/>
            )}
        </div>
    )
}

export default TabList