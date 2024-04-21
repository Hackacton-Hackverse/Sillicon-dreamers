import React, { useState } from "react";
import { Link, Form, redirect } from "react-router-dom";
import "./stylesheet/resetPassword.css";
import { escapedPattern } from "../../context/data";
import Logo from "../../components/Logo";

export const action = async ({ request }) => {
  let formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  if(data["new-password"]!=data["confirm-password"]){
    alert("le nouveau mot de passe et le mot de passe de confirmation sont différents");
    return redirect("");
  }
  /*
  *Ici, on va gére la logique de modification du mot de passe
  */
 return redirect("/login")
};

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  return (
    <div className="forgotpwd-container">
     <Logo />
      <div className="body-container">
        <div className="forgot-pwd-content-container">
          <Form method="post" className="forgot-pwd-form">
            <p className="forgot-pwd-text">Reset Password</p>
            <div className="forgot-pwd-email-container">
              <label className="label-input" htmlFor="">
                Enter new password
              </label>
              <input
                type="password"
                name="new-password"
                id=""
                required
                pattern={escapedPattern}
              />
            </div>
            <div className="password-error">
              Le mot de passe doit au moins contenir 8 caractères,avec au moins
              <ul style={{ marginLeft: "1rem" }}>
                {" "}
                <li>une majuscule</li>, <li>une minuscule</li>,{" "}
                <li>un chiffre et un caractère spécial</li>
              </ul>
            </div>
            <div className="forgot-pwd-email-container">
              <label className="label-input" htmlFor="">
                Confirm new password
              </label>
              <input
                type="password"
                name="confirm-password"
                id=""
                required
                pattern={escapedPattern}
              />
            </div>

            <div className="next-button-div column">
              <button className="next-button-forgot" type="submit">Reset Password</button>
              <Link to="/login" className="back-button-forgot">
                Cancel
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

export default ResetPassword;
