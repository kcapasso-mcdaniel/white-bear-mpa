import React from "react";
import brandLogo from "../../img/logo-landing.png";

// import landingImage from "../../img/background-landing.jpg";

export default function Landing() {
   return (
      <div className="background-image">
         <div className="landing-page container">
            <div className="row">
               <div className="col=12 mt-xl-7 mt-lg-5">
                  <img
                     className="float-left mr-6 img-fluid"
                     src={brandLogo}
                     alt="outline of bear"
                  />
                  <h1 className="mt-2 mt-sm-0 mt-lg-2 d-inline-flex">
                     White Bear
                  </h1>
               </div>
            </div>

            <div className="row mt-md-6 mt-xl-8 mt-4">
               <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-12">
                  <div className="row">
                     <div className="col-xl-5 col-sm-6 col-12 mb-6">
                        <div className="card landing-card text-primary">
                           <h2 className="card-title">Nice to meet you</h2>
                           <p>Sign up for White Bear. Free forever</p>
                           <div
                              className="mb-0 mt-4 needs-validation"
                              id="sign-up-form"
                           >
                              <p className="text-success mb-4">
                                 Let's get you signed up.
                              </p>

                              <p>Email address</p>
                              <input
                                 type="email"
                                 className="form-control"
                                 id="new-userEmail"
                                 required
                              />
                              <p className="text-danger" id="emailErrorMessage">
                                 Please enter a valid email address
                              </p>

                              <p>Create a password</p>
                              <input
                                 type="password"
                                 className="form-control"
                                 id="new-userPassword"
                              />
                              <p
                                 className="text-danger"
                                 id="passwordErrorMessage"
                              >
                                 Password error will go here.
                              </p>
                              <button
                                 type="submit"
                                 className="btn btn-success mt-4 w-100"
                                 id="lets-go-button"
                              >
                                 Let's go!
                              </button>
                           </div>
                           <button
                              type="submit"
                              className="btn btn-success mb-4 mt-4"
                              id="sign-up-button"
                           >
                              Sign up!
                           </button>
                        </div>
                     </div>

                     <div className="card landing-card text-primary mb-6">
                        <h2 className="card-title mt-2">Welcome back</h2>
                        <p className="mb-4">
                           Log in with your email address and password
                        </p>
                        <p className="mt-4">Email address</p>
                        <input
                           type="email"
                           className="form-control form-group"
                           id="userEmailAddress"
                        />
                        <p className="mt-2">Password</p>
                        <input
                           type="password"
                           className="form-control form-group"
                           id="userPassword"
                        />
                        <a
                           href="create-answer.html"
                           type="submit"
                           className="btn btn-success btn-lg mt-4 float-right"
                        >
                           Log in
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
