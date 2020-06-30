import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get(
            "https://raw.githubusercontent.com/kcapasso-mcdaniel/white-bear-mpa/master/src/mock-data.js/memory-cards.json"
         )
         .then(function (res) {
            // store what we get from api
            props.dispatch({
               type: actions.STORE_QUEUED_CARDS,
               payload: res.data,
            });
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });

      /* 
            queuedCards: [], 
            indexOfCurrentCard: 0, 
            user:{}
      */
   }
   render() {
      // get all the cards and show the card with the current index
      const memoryCard = this.props.queuedCards[this.props.indexOfCurrentCard];
      return (
         <AppTemplate>
            <div className="card">
               <div className="card-body bg-primary">
                  {memoryCard && memoryCard.imagery}
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
}

function mapStateToProps(state) {
   return {
      queuedCards: state.queuedCards,
      indexOfCurrentCard: state.indexOfCurrentCard,
   };
}

// curry argument into function
export default connect(mapStateToProps)(ReviewImagery);
