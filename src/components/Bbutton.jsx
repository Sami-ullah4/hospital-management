import React from 'react'

const Bbutton = ({BgColor,BorderColor,BorderSzie,textColor ,text,margin}) => {
  return (
<>
<div>
    <button className= {`w-[300px]  ${textColor} ${margin} h-[48px] flex justify-center items-center lg:w-[180px] lg:-[48px] rounded-full ${BgColor} ${BorderSzie} ${BorderColor} `}>{text}</button>
</div>
</>  )
}

export default Bbutton