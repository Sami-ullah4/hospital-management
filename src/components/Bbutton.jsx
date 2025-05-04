import React from 'react';
import { Link } from 'react-router-dom';

const Bbutton = ({
  BgColor,
  BorderColor,
  BorderSzie,
  textColor,
  text,
  margin,
  to, // 👈 added for routing
}) => {
  const classes = `w-[300px] ${textColor} ${margin} h-[48px] cursor-pointer flex justify-center items-center 
                   lg:w-[180px] rounded-full ${BgColor} ${BorderSzie} ${BorderColor}`;

  return (
    <>
      {to ? (
        <Link to={to}>
          <button className={classes}>{text}</button>
        </Link>
      ) : (
        <div>
          <button className={classes}>{text}</button>
        </div>
      )}
    </>
  );
};

export default Bbutton;
