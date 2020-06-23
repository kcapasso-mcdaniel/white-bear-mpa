import React from "react";
import thumbsUPIcon from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data.js/memory-cards";
const memoryCard = memoryCards[0];

export default function ReviewAnswer() {
   return (
      //  wrapped the content in a React Template
      <AppTemplate>
         <div className="card">
            <div className="card-body bg-primary">{memoryCard.imagery}</div>
         </div>
         <div className="card mb-5">
            <div className="card-body  bg-secondary">{memoryCard.answer}</div>
         </div>
         <Link
            to="review-imagery"
            className="btn btn-link ml-4"
            id="back-to-answer-imagery"
         >
            Edit card
         </Link>
         <div className="float-right">
            <Link to="review-empty" className="btn btn-outline-primary">
               Needs work
            </Link>
            <Link to="review-imagery" className="btn btn-primary ml-4">
               <img
                  src={thumbsUPIcon}
                  width="20px"
                  style={{ marginBottom: "5px", marginRight: "8px" }}
                  alt=""
               />
               Got it
            </Link>
         </div>
      </AppTemplate>
   );
}
