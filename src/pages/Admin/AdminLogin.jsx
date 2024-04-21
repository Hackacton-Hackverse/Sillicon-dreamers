import React, { useState } from 'react';
import logo from '../../assets/images/silicon_logo.svg';
import './stylesheet/AdminLogin.css';
import heroIcon from '../../assets/images/hero-image.svg';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Logo from '../../components/Logo';

const AdminLogin = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordIsVisible, setPasswordIsVisible] = useState('');

  return (
    <div className="login-container">
      <div className="header-container">
        <div className="landing-header">
          <Logo />
        </div>
      </div>
      <div className="body-container">
        <div className="body-container-content-admin">
          <form action="" className="login-form">
            <p className="login-text">Connect as Admin</p>
            <div className="email-div-login">
              <label className="label-input" htmlFor="Email-login">
                Username
              </label>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                id="Email-login"
                type="text"
              />
            </div>
            <div className="password-div-login">
              <div className="password-div-login-content">
                <label className="label-input" htmlFor="Password-login">
                  Password
                </label>
                <input
                  className="input-password-style"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="Password-login"
                  type={passwordIsVisible ? 'text' : 'password'}
                />

                {passwordIsVisible && (
                  <div className="eyes_style2">
                    <AiOutlineEye
                      size={24}
                      onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                    />
                  </div>
                )}
                {!passwordIsVisible && (
                  <div className="eyes_style2">
                    <AiOutlineEyeInvisible
                      size={24}
                      onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                    />
                  </div>
                )}
              </div>

              <div className="password-div-login-checks">
                <div className="login-check-div">
                  <input
                    type="checkbox"
                    className="checkbox-label"
                    name=""
                    id="rememberMe"
                  />
                  <label htmlFor="rememberMe" className="remember-me">
                    Remember Me
                  </label>
                </div>
              </div>
            </div>
            <div className="login-div-button">
              <button className="login-btn">Login</button>
            </div>
          </form>
        </div>

        <div className="login-header-body">
          <p>2024 © SiliconConnect - All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;