import React from 'react';
import Tab from './Tab/Tab';
import TabList from './TabList/TabList';
import './tabs.scss';

function Tabs({ children, selectedTab, changeTab, ...props}) {
    let tabProps = []
    const content = React.Children.map(children, (child) => {
        if (child.type === Tab) {
            const { title, name } = child.props
            tabProps.push({ title, name })
            if (selectedTab ? (selectedTab !== child.props.name) : (tabProps.length !== 1)) {
                return null
            }
        }
        return child
    })
    

    return (
        <div className="tabs">
            <TabList
                selectedTab={selectedTab}
                changeTab={changeTab}
                tabs={tabProps}
            />
            <div className="tabs__content">
                {content}
            </div>
        </div>
    )
}


export default Tabs