import React from 'react'
import { Link } from 'react-router-dom'

const SettingCatagories = () => {
  return (
    <div className="overflow-hidden px-5">
    <ul className="list-none flex lg:flex-col gap-4 lg:gap-0">
      <li>
        <Link
          to="/privacy-settings"
          className="font-[400] text-[18px] leading-[150%] text-[#002A3C]"
        >
          Privacy Settings
        </Link>
      </li>
      <li>
        <Link
          to="/data-settings"
          className="font-[400] text-[18px] leading-[150%] text-[#002A3C] whitespace-nowrap"
        >
         <span>Data Settings</span>
        </Link>
      </li>
      
      
      
    </ul>
  </div>  )
}

export default SettingCatagories