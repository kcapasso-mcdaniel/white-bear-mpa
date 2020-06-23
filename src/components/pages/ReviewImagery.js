import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data.js/memory-cards";
const memoryCard = memoryCards[0];

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <div className="card">
            <div className="card-body bg-primary">{memoryCard.imagery}</div>
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
