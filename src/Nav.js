import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {

  return (
    <nav>
      <Link  to ='/swap' className="swap">
      <h1>Swap</h1>
      </Link>  
      <Link  to = '/pool'className="pool">  
      <h1>Pool</h1>
      </Link>  
    </nav>
  );
}

export default Nav;