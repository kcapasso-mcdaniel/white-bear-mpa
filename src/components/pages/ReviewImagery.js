import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      if (props.queue.cards.length === 0) {
         console.log("Empty array of queue cards");
         axios
            .get(
               "https://raw.githubusercontent.com/kcapasso-mcdaniel/white-bear-mpa/master/src/mock-data.js/memory-cards.json"
            )
            .then((res) => {
               // store what we get from api
               console.log(res);
               props.dispatch({
                  type: actions.STORE_QUEUED_CARDS,
                  payload: res.data,
               });
            })
            .catch((error) => {
               // handle error
               console.log(error);
            });
      }
   }

   goToPrevCard() {
      this.props.dispatch({ type: actions.DECREMENT_QUEUE_INDEX });
      this.props.history.push("/review-answer");
   }

   render() {
      // access a single memory card by accessing the index of the array
      const memoryCard = this.props.queue.cards[this.props.queue.index];
      return (
         <AppTemplate>
            <div className="card">
               <div className="card-body bg-primary">
                  {memoryCard && memoryCard.imagery}
               </div>
            </div>

            {this.props.queue.index > 0 && (
               <button
                  className="btn btn-link mx-4 my-5"
                  id="back-to-answer-imagery"
                  onClick={() => this.goToPrevCard()}
               >
                  Previous card
               </button>
            )}

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

// Global state below

function mapStateToProps(state) {
   return {
      queue: state.queue,
   };
}

export default connect(mapStateToProps)(ReviewImagery);
