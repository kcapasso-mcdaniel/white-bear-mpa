import React from "react";
import appLogo from "../../icons/logo-app.svg";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <div>
         <img src={appLogo} width="32px" alt="white bear logo" />
         <h3 className="d-inline text-brand text-dark ml-1">White Bear</h3>
         <Link to="/Landing" className="btn btn-link float-right">
            Log out
         </Link>
         <div className="clearFix"></div>
      </div>
   );
}
