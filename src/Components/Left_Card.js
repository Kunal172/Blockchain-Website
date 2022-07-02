import React from 'react';
import './Style.css';

export default function Left_Card() {
  return (
    <div className='left-card container-fluid justify-content-start'>
        <h2>
        Stake Your <span className='token'>$Token</span> 
        </h2>
        <h2>
        And Earn 20% Interest
        </h2>
        <h2>
        On Staked Token 
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ullamco laboris nisi ut aliquip ex ea commodo
        </p>

        <div className='card card1'>
          <div className='card-body'>
            <h6>APY in Percentage</h6>
            <h3>24% APY</h3>
          </div>
        </div>

        <div className='card card2'>
          <div className='card-body'>
            <h6>Current Token Price</h6>
            <h3>1.384 USDT</h3>
          </div>
        </div>
    </div>
  )
}
