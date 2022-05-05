import React from 'react';

  
function Tab({children, ...props }) {
    return (
      <div className="tabs__tab">
        {children}
      </div>
    )
}

export default Tab