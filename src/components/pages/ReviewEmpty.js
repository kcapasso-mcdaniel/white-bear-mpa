import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h4 className="my-4 text-center text-muted">Out of cards</h4>
         <Link
            to="review-answer"
            className="btn btn-link ml-4 mt-5"
            id="back-to-answer-imagery"
         >
            Previous card
         </Link>

         <button
            className="btn btn-outline-primary btn-lg float-right mt-5"
            id="next-answer"
         >
            Get more cards
         </button>
      </AppTemplate>
   );
}
