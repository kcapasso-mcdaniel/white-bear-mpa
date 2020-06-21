import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <h4 className=" my-4 text-center text-muted">Add an answer</h4>

         <div className="card">
            <div className="card-body bg-primary">
               <textarea rows="11" id="answerArea" autoFocus={true}></textarea>
            </div>
         </div>

         <p className="float-right mb-5 px-4 py-4" id="characterCounter">
            0/240
         </p>

         <div className="clearfix"></div>

         <Link
            to="create-imagery"
            className="btn btn-outline-primary float-right px-6"
            id="next-button"
         >
            Next
         </Link>
      </AppTemplate>
   );
}
