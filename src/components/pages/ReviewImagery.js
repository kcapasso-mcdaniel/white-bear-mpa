import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import axios from "axios";
import memoryCards from "../../mock-data.js/memory-cards";
const memoryCard = memoryCards[0];

export default class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://run.mocky.io/v3/6de4fee6-ec5b-45f3-87a3-cc82d77ee469")
         .then(function (response) {
            // handle success
            console.log(response);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   }
   render() {
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
}
