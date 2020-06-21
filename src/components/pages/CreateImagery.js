import React from "react";
import saveIcon from "../../icons/save.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function CreateImagery() {
   return (
      <AppTemplate>
         <h4 className="my-4 text-center text-muted">Add memorable imagery</h4>

         <div className="card" id="cardInput">
            <div className="card-body bg-primary">
               <textarea rows="7" cols="30" autoFocus={true}></textarea>
            </div>
         </div>
         <div className="card" id="cardText">
            <div className="card-body bg-secondary ">
               One morning, when Gregor Samsa woke from troubled dreams, he
               found himself transformed in his bed into a horrible vermin. He
               lay on his armour-like back, and if he lifted his head a little
               he could see his brown belly, slightly domed and divided by
               arches into stiff sections. The bedding was hardly able to cover
               it and seemed ready to slide off any moment.
            </div>
         </div>

         <p className="float-right mb-5">0/240</p>

         <div className="clearfix"></div>

         <Link
            to="create-answer"
            className="btn btn-link"
            id="back-to-answer-imagery"
         >
            Back to answer
         </Link>
         <Link
            to="create-answer"
            className="btn btn-primary btn-lg float-right"
            id="save-imageryButton"
         >
            <img
               src={saveIcon}
               width="20px"
               style={{ marginBottom: "3px", marginRight: "5px" }}
               alt=""
            />
            Save
         </Link>
      </AppTemplate>
   );
}
