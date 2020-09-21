import React from 'react'

function Input1({heading,title}) {
    return (
        <div>
            <div className="container">    
      <h2 className="center">{heading}</h2>      
      <small>{title}</small>
      <br/>
      <div className="pay">
      <select className="selectList">
        <option value="USDT">USDT</option>
        <option value="USDC">USDC</option>
        <option selected value="TUSD">TUSD</option>
        <option value="DAI">DAI</option>
      </select>      
      <input type ="text" className="inputbox"/>    
      </div>
      
    </div>
        </div>
    )
}

export default Input1
