import React from "react";
import thumbsUPIcon from "../../icons/thumbs-up.svg";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewAnswer() {
   return (
      //  wrapped the content in a React Template
      <AppTemplate>
         <Header />
         <Navigation />
         <div className="card">
            <div className="card-body bg-primary">
               One morning, when Gregor Samsa woke from troubled dreams, he
               found himself transformed in his bed into a horrible vermin. He
               lay on his armour-like back, and if he lifted his head a little
               he could see his brown belly, slightly domed and divided by
               arches into stiff sections. The bedding was hardly able to cover
               it and seemed ready to slide off any moment.
            </div>
         </div>
         <div className="card mb-5">
            <div className="card-body  bg-secondary">
               One morning, when Gregor Samsa woke from troubled dreams, he
               found himself transformed in his bed into a horrible vermin. He
               lay on his armour-like back, and if he lifted his head a little
               he could see his brown belly, slightly domed and divided by
               arches into stiff sections. The bedding was hardly able to cover
               it and seemed ready to slide off any moment.
            </div>
         </div>
         <button className="btn btn-link ml-4" id="back-to-answer-imagery">
            Edit card
         </button>
         <div className="float-right">
            <button className="btn btn-outline-primary">Needs work</button>
            <button className="btn btn-primary ml-4">
               <img
                  src={thumbsUPIcon}
                  width="20px"
                  style={{ marginBottom: "5px", marginRight: "8px" }}
                  alt=""
               />
               Got it
            </button>
         </div>
      </AppTemplate>
   );
}
