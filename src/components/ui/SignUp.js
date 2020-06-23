import React from "react";
import classnames from "classnames";

export default class SignUp extends React.Component {
   constructor(props) {
      super(props);
      console.log("In a new class component");
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         passwordError: "",
         hasEmailError: false,
      };
   }

   // Function is called in the onClick of the Sign Up button to display the inputs
   // the state of isDisplayingInputs is set to true when this function is called
   showInputs() {
      this.setState({ isDisplayingInputs: true });
   }

   validateAndCreateUser() {
      console.log("VALIDATE ME");
      //   can't be blank
      // must have valid email regex
      const emailInput = document.getElementById("email-input").value;
      console.log(emailInput);
      const lowerCasedEmailInput = emailInput.toLowerCase();
      console.log(lowerCasedEmailInput);
      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // set the state with email error and change string to an error message
      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      else if (emailRegex.test(lowerCasedEmailInput) === false) {
         this.setState({
            emailError: "Please enter a valid email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }
   render() {
      return (
         <div className="col-xl-5 col-sm-6 col-12 mb-6">
            <div className="card landing-card text-primary">
               <h2 className="card-title">Nice to meet you</h2>
               <p>Sign up for White Bear. Free forever</p>

               {this.state.isDisplayingInputs && (
                  <div className="mb-0 mt-4 needs-validation" id="sign-up-form">
                     <p className="text-success mb-4">
                        Let's get you signed up.
                     </p>

                     <label htmlFor="email-input">Enter email address</label>
                     <input
                        type="email"
                        className={classnames({
                           "form-control": true,
                           "mb-2": true,
                           "is-invalid": this.state.hasEmailError,
                           // "is-invalid": this.state.emailError !== "",
                        })}
                        id="email-input"
                        required
                     />

                     {this.state.hasEmailError && (
                        <p className="text-danger">{this.state.emailError}</p>
                     )}

                     <label htmlFor="password-input">Create a password</label>
                     <input
                        type="password"
                        className="form-control text-danger"
                        id="password-input"
                     />
                     <p className="text-danger">Password error will go here.</p>
                     <button
                        type="submit"
                        className="btn btn-success mt-4 w-100"
                        id="lets-go-button"
                        onClick={() => {
                           this.validateAndCreateUser();
                        }}
                     >
                        Let's go!
                     </button>
                  </div>
               )}
               {/* if it's not displaying inputs display this button  */}
               {!this.state.isDisplayingInputs && (
                  <button
                     type="sign-up"
                     className="btn btn-success mb-4 mt-4"
                     id="sign-up-button"
                     onClick={() => {
                        this.showInputs();
                     }}
                  >
                     Sign up!
                  </button>
               )}
            </div>
         </div>
      );
   }
}
