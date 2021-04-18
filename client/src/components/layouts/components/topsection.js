import React from 'react';
import './components.css';
// import Svg from '../assets/undraw_teaching_f1cm.svg';

const topSection = (props) => {
  return (
    <div>
      <div className='topbox'>
        <img src={props.headimage} alt='svg' />

        <div className='tbcontent'>
          <h2 id='lft'>{props.head}</h2>
          <p id='lft'>{props.description}</p>
          <a href='#down'>
            <button id='lft' className='circleScaleBtn'>
              <span>Get started</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default topSection;
