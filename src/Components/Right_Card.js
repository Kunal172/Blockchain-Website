import React from 'react';
import './Style.css';

export default function Right_Card() {
  return (
    <div className='container-fluid justify-content-end'>

        <div className='card card3'>
          <div className='card-body'>
            <h6>Min Staking Amount</h6>
            <h3>50 USDT</h3>
          </div>
        </div>

        <div className='card card4'>
          <div className='card-body'>
            <h6>Max Staking Amount</h6>
            <h3>500 USDT</h3>
          </div>
        </div>

        <div className='card card5'>
          <div className='card-body'>
            <span className='text-left1 text-left'>Your Wallet Address</span>
            <span className='text-right1 text-right'>0x8F5d...8955 </span>

            <span className='text-left2 text-left'>Total Stakable Token</span>
            <span className='text-right2 text-right'>53746 TOKEN </span>

            <span className='text-left3 text-left'>Total Stakable Token In USD</span>
            <span className='text-right3 text-right'>$532345</span>

            <span className='text-left4 text-left'>Unstake Fee</span>
            <span className='text-right4 text-right'>15%</span>

            <span className='text-left5 text-left'>Lock Deadline</span>
            <span className='text-right5 text-right'>30 Days</span>

            <span className='text-left6 text-left'>Pool Filled</span>
            <div class="progress text-left">
              <div class="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45% Filled</div>
            </div>

            <span className='text-left7 text-left'>Stake Your Token</span>
            <div class="input-group text-left input">
              <input type="text" class="form-control input-box" placeholder="Enter Amount Of Token" aria-label="Enter Amount Of Token" aria-describedby="button-addon2"/>
              <button class="btn btn-max" type="button" id="button-addon2"> MAX </button>
            </div>

            <button class="btn btn-lg btn-stake" type="button"> STAKE </button>
            <button class="btn btn-lg btn-unstake" type="button"> UNSTAKE </button>

            <button class="btn btn-lg btn-emergency" type="button"> EMERGENCY WITHDRWAN </button>

          </div>
        </div>
    </div>
  )
}
