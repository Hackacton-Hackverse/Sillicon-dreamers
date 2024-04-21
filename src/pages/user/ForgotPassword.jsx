import React, { useState } from 'react';
import { Link,Form, redirect } from 'react-router-dom';
import './stylesheet/ForgotPassword.css';
import Logo from '../../components/Logo';

export const action = async ({ request }) => {
  let formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  /*
  *Ici, on va gére la logique d'authentification
  */
 return redirect("/confirm-reset-password")
};

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <div className="forgotpwd-container">
      <Logo />
      <div className="body-container">
        <div className="forgot-pwd-content-container">
          <Form method='post' className="forgot-pwd-form">
            <p className="forgot-pwd-text">Forgot Password</p>
            <div className="forgot-pwd-email-container">
              <label className="label-input" htmlFor="emailForgot-pwd">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="account-email"
                required
                id="emailForgot-pwd"
              />
            </div>
            <div className="account-recover-text-div">
              <p>
                If the email is associated with an account, you'll receive
                instructions on how to recover your account and modify your
                password
              </p>
            </div>
            <div className="next-button-div column">
              <button type='submit' className="next-button-forgot">
                Next
              </button>
              <Link to="/login" className="back-button-forgot">
                Back
              </Link>
            </div>
          </Form>
        </div>
        <div className="login-header-body">
          <p>2024 © SiliconConnect - All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
