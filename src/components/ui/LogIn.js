import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";

export default class LogIn extends React.Component {
   constructor(props) {
      super(props);
      console.log("In a new class component");
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         passwordError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }

   // function for email validation using state
   async setValidEmailState(emailInput) {
      const lowerCasedEmailInput = emailInput.toLowerCase();
      console.log(lowerCasedEmailInput);
      // must have valid email regex
      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // set the state with email error and change string to an error message
      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      // test evaluates the email input and compares to the regex if false set the state with the error message and hasEmailError is true
      else if (emailRegex.test(lowerCasedEmailInput) === false) {
         this.setState({
            emailError: "Please enter a valid email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   // function to validate the password with state
   async setValidPasswordState(signUpPasswordInput) {
      console.log(signUpPasswordInput);

      if (signUpPasswordInput === "") {
         this.setState({
            passwordError: "Please create a password.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateAndCreateUser() {
      //   can't be blank
      const emailInput = document.getElementById("login-email-input").value;
      console.log(emailInput);
      const signUpPasswordInput = document.getElementById(
         "login-password-input"
      ).value;
      await this.setValidEmailState(emailInput);
      await this.setValidPasswordState(signUpPasswordInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         const user = {
            id: getUuid(),
            email: emailInput,
            password: hash(signUpPasswordInput),
            createdAt: Date.now(),
         };
         console.log(user);
      }
   }
   render() {
      return (
         <div className="col-xl-5 offset-xl-2 col-sm-6 col-12 mb-6">
            <div className="card">
               <div className="card-body landing-card text-primary">
                  <h2 className="card-title">Welcome back</h2>
                  <p className="mb-4">
                     Log in with your email address and password.
                  </p>
                  <label htmlFor="login-email-input" className="mt-4">
                     Email address
                  </label>
                  <input
                     type="email"
                     className={classnames({
                        "form-control": true,
                        "is-invalid": this.state.hasEmailError,
                     })}
                     id="login-email-input"
                  />
                  {this.state.hasEmailError && (
                     <p className="text-danger">{this.state.emailError}</p>
                  )}

                  <label htmlFor="login-password-input" className="mt-2">
                     Password
                  </label>
                  <input
                     type="password"
                     className={classnames({
                        "form-control": true,
                        "is-invalid": this.state.hasPasswordError,
                     })}
                     id="login-password-input"
                  />
                  {this.state.hasPasswordError && (
                     <p className="text-danger">{this.state.passwordError}</p>
                  )}
                  <Link
                     to="create-answer"
                     type="submit"
                     className="btn btn-success mt-2 float-right"
                     onClick={() => {
                        this.validateAndCreateUser();
                     }}
                  >
                     Log in
                  </Link>
               </div>
            </div>
         </div>
      );
   }
}
