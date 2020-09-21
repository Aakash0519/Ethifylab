import React from 'react'

function Exchanges({config}) {
    
    return (
        <div className="container">
        { 
            config.inputs.map(input => 
                <div>
                        {input.heading&& <p className="center">{input.heading}</p>      }
                       <br/>
                       {input.title&&<small className ="youPay" >{input.title}</small>}
                        <br/>
                        <div className="payInput">
                            <select className="selectList">
                                <option value="USDT">USDT</option>
                                <option value="USDC">USDC</option>
                                <option selected value="TUSD">TUSD</option>
                                <option value="DAI">DAI</option>
                            </select>      
                            <input type ="text" className="inputbox"/>    
                        </div>
                        {input.button&&<button className="butt" >{input.button}</button>  }
                                              
                </div>
        )}
        </div>
    )
}


export default Exchanges
