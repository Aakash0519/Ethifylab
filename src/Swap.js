import React from 'react';
import './App.css';
import Exchanges from './Exchanges';

function Swap(){
  return(
    <Exchanges config={
      {inputs:
        [
          {
            label:"1",
            heading:"Market order",
            title:"You Pay",
            
          },
          {
            label:"2",
            title:"You Recieve",
            button:"Review Order"
          }
        ]}}/>
  );
}

export default Swap;