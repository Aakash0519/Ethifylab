import React from 'react';
import './App.css';
import Exchanges from './Exchanges';

function Pool() {
  return (
    <Exchanges config={
      {inputs:
        [
          {
            label:"1",
            heading:"Deposit",
            title:"Token"
          },
          {
            label:"2",            
          },
          {
            label:"3",   
            button:"Review Order"         
          }
        ]}}/>
  );
}

export default Pool;