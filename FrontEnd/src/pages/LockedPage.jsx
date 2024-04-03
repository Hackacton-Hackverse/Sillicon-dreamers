import React, { useState } from 'react';
import black_lock_icon from '../assets/images/black_lock_icon.svg'
import './stylesheet/LockedPage.css';

const LockedPage = ({setIsUnLocked,password}) => {
  const [verifyPasswordValue, setVerifyPasswordValue] = useState("")
  const checkPassword = () =>{

    if(verifyPasswordValue==password){
      setIsUnLocked(true);
    } else {
      alert("Incorrect password, try again");
    }
  }
  return (
    <div className="lockedPage-container">
      <div className='lockedPage-content'>  
        <div className='lockedPage-icon'>
            <img src={black_lock_icon} alt="" />
        </div>
        <div className='text-and-passwordInput'>
          <p>Enter the password to access this file</p>
          <input type="text" value={verifyPasswordValue} onChange={(e) => setVerifyPasswordValue(e.target.value)} />
        </div>
        <div className='verifyPassword-btn'>
          <button onClick={checkPassword}>Enter</button>
        </div>
      </div>
    </div>
  );
};

export default LockedPage;
