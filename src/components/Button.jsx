import React from "react";
import "./Button.css";

const Button = ({symbol,color,handleClick}) => {
  return <div   className="button-wrapper" onClick={()=>handleClick(symbol)} style={{backgroundColor : color}}> 
    {symbol}</div>;
};

export default Button;
