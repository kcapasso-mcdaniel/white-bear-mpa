import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
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
                  className="form-control form-group"
                  id="login-email-input"
               />
               <label htmlFor="login-password-input" className="mt-2">
                  Password
               </label>
               <input
                  type="password"
                  className="form-control form-group"
                  id="login-password-input"
               />
               <Link
                  to="create-answer"
                  type="submit"
                  className="btn btn-success mt-2 float-right"
               >
                  Log in
               </Link>
            </div>
         </div>
      </div>
   );
}
