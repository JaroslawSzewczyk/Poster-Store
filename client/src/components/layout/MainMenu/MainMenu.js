import React from 'react';
import './MainMenu.scss';

const MainMenu = (props) => {

  return (
    <nav>
      <div className="myBtn">
        <div className="line left"></div>
        <div className="line middle"></div>
        <div className="line right"></div>
      </div>
      <div className='myNav'>
        <h2>Poster store</h2>
        <ul className='menu'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Basket</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>
    </nav>
  );}
  

export default MainMenu;