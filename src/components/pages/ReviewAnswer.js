import React from "react";
import thumbsUPIcon from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions";

class ReviewAnswer extends React.Component {
   goToNextCard() {
      // action
      this.props.dispatch({ type: actions.UPDATE_INDEX_OF_CURRENT_CARD });
      this.props.history.push("/review-imagery");
   }
   render() {
      // access a single memory card by accessing the index of the array
      const memoryCard = this.props.queue.cards[this.props.queue.index];
      return (
         //  wrapped the content in a React Template
         <AppTemplate>
            <div className="card">
               <div className="card-body bg-primary">
                  {memoryCard && memoryCard.imagery}
               </div>
            </div>
            <div className="card mb-5">
               <div className="card-body  bg-secondary">
                  {memoryCard && memoryCard.answer}
               </div>
            </div>
            <Link
               to="review-imagery"
               className="btn btn-link ml-4"
               id="back-to-answer-imagery"
            >
               Edit card
            </Link>
            <div className="float-right">
               <button
                  className="btn btn-outline-primary"
                  onClick={() => this.goToNextCard()}
               >
                  Needs work
               </button>
               <button
                  className="btn btn-primary ml-4"
                  onClick={() => this.goToNextCard()}
               >
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
}

function mapStateToProps(state) {
   return {
      queue: state.queue,
   };
}

// curry argument into function
export default connect(mapStateToProps)(ReviewAnswer);
