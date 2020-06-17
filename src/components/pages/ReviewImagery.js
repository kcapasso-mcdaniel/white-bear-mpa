import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewImagery() {
   return (
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

         <Link
            to="review-answer"
            className="btn btn-link mx-4 my-5"
            id="back-to-answer-imagery"
         >
            Previous card
         </Link>

         <Link
            to="review-answer"
            className="btn btn-outline-primary float-right px-6 mx-4 my-5"
            id="next-answer"
         >
            Show answer
         </Link>
      </AppTemplate>
   );
}
