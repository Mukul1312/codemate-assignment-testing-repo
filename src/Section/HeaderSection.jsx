import React from 'react';

const HeaderSection = () => {
  const headerTabs = ["Dashboard", "Option Chain", "Strategy builder", "Positions", "Order book"];

  return (
    <div className="header flex relative">
      <div className="logo ms-[52px] mt-[13px] mb-[9px]"><img src={"./tracktrades.png"} /></div>
      <div className="header__tabs ms-[64px] mt-[17px] mb-[16px]">
        {headerTabs.map(tab => <span className={tab.includes("Option") ? "text-[#2C57F5] cursor-pointer me-[22px]" : `me-[22px]` }  key={tab}>{tab}</span>)}
      </div>
      <div className='profile__dropdown absolute end-[53px] top-[15px]'>
        <span className='pr-[8px]'>Profile</span>
        <img className='inline' src="./Forward.png" />
      </div>
    </div>
  )
}

export default HeaderSection