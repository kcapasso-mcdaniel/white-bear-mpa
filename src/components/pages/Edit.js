import React from "react";
import AppTemplate from "../ui/AppTemplate";
import saveIcon from "../../icons/save.svg";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data.js/memory-cards";
import toDisplayDate from "date-fns/format";
import classnames from "classnames";
import { checkIsOver, MAX_CARD_CHARS } from "../../utils/helpers";
const memoryCard = memoryCards[0];

export default class Edit extends React.Component {
   constructor(props) {
      super(props);
      console.log("This is the edit component");
      this.state = {
         imageryText: memoryCard.imagery,
         answerText: memoryCard.answer,
      };
   }

   setImageryText(e) {
      this.setState({ imageryText: e.target.value });
   }

   setAnswerText(e) {
      this.setState({ answerText: e.target.value });
   }

   checkHasInvalidCharacterAmount() {
      if (
         this.state.answerText.length > MAX_CARD_CHARS ||
         this.state.answerText.length === 0 ||
         this.state.imageryText.length > MAX_CARD_CHARS ||
         this.state.imageryText.length === 0
      ) {
         return true;
      } else return false;
   }

   render() {
      return (
         <AppTemplate>
            <h4 className="my-4 text-center text-muted">Edit card</h4>

            <div className="card">
               <div className="card-body bg-primary">
                  <textarea
                     rows="4"
                     defaultValue={memoryCard.imagery}
                     onChange={(e) => this.setImageryText(e)}
                  ></textarea>
               </div>
            </div>
            <div className="card">
               <div className="card-body bg-secondary">
                  <textarea
                     rows="4"
                     defaultValue={memoryCard.answer}
                     onChange={(e) => this.setAnswerText(e)}
                  ></textarea>
               </div>
            </div>

            <p className="float-right mb-5 ml-4 mt-4">
               <span
                  className={classnames({
                     "text-danger": checkIsOver(
                        this.state.imageryText,
                        MAX_CARD_CHARS
                     ),
                  })}
               >
                  Top: {this.state.imageryText.length}/ {MAX_CARD_CHARS}{" "}
               </span>
               &nbsp;&nbsp;{" "}
               <span
                  className={classnames({
                     "text-danger": checkIsOver(
                        this.state.answerText,
                        MAX_CARD_CHARS
                     ),
                  })}
               >
                  Bottom: {this.state.answerText.length}/ {MAX_CARD_CHARS}{" "}
               </span>
            </p>

            <div className="clearfix"></div>

            <Link
               to="all-cards"
               className="btn btn-link"
               id="back-to-answer-imagery"
            >
               Discard changes
            </Link>

            <Link
               to="all-cards"
               className={classnames("btn btn-primary btn-lg float-right", {
                  disabled: this.checkHasInvalidCharacterAmount(),
               })}
               id="save-card"
            >
               <img
                  src={saveIcon}
                  width="20px"
                  style={{ marginBotton: "3px", marginRight: "6px" }}
                  alt=""
               />
               Save
            </Link>
            <h4 className="all-cards text-muted text-center py-4 mt-4">
               Card properties
            </h4>
            <table className="table table-responsive table-borderless">
               <thead>
                  <tr>
                     <th className="text-muted" scope="row">
                        Created on:
                     </th>
                     <td>{toDisplayDate(memoryCard.createdAt, "MMM. d, y")}</td>
                  </tr>
                  <tr>
                     <th className="text-muted" scope="row">
                        Last attempt:
                     </th>
                     <td>
                        {toDisplayDate(memoryCard.lastAttemptAt, "MMM. d, y")}
                     </td>
                  </tr>
                  <tr>
                     <th className="text-muted" scope="row">
                        Next attempt:
                     </th>
                     <td>
                        {toDisplayDate(memoryCard.nextAttemptAt, "MMM. d, y")}
                     </td>
                  </tr>
                  <tr>
                     <th className="text-muted" scope="row">
                        Consecutives:
                     </th>
                     <td>{memoryCard.totalSuccessfulAttempts}</td>
                  </tr>
               </thead>
            </table>

            <div className="custom-control custom-checkbox">
               <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck"
                  name="example1"
               />
               <label className="custom-control-label" htmlFor="customCheck">
                  Show delete button
               </label>
            </div>

            <Link
               to="all-cards"
               type="button"
               className="btn btn-outline-danger mt-4"
               id="delete-button"
            >
               Delete this card
            </Link>
         </AppTemplate>
      );
   }
}
