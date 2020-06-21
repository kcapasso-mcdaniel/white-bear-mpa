import React from "react";
import AppTemplate from "../ui/AppTemplate";
import saveIcon from "../../icons/save.svg";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data.js/memory-cards";
const memoryCard = memoryCards[2];

export default function Edit() {
   return (
      <AppTemplate>
         <h4 className="my-4 text-center text-muted">Edit card</h4>

         <div className="card">
            <div className="card-body bg-primary">
               <textarea
                  rows="7"
                  className="d-md-none"
                  defaultValue={memoryCard.imagery}
               ></textarea>
               <textarea
                  rows="4"
                  className="d-none d-md-block"
                  defaultValue={memoryCard.imagery}
               ></textarea>
            </div>
         </div>
         <div className="card">
            <div className="card-body bg-secondary">
               <textarea
                  rows="7"
                  className="d-md-none"
                  defaultValue={memoryCard.answer}
               ></textarea>
               <textarea
                  rows="4"
                  className="d-none d-md-block"
                  defaultValue={memoryCard.answer}
               ></textarea>
            </div>
         </div>

         <p className="float-right mb-5 ml-6">Bottom: 0/240</p>
         <p className="float-right mb-5">Top: 0/240</p>

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
            className="btn btn-primary btn-lg float-right"
            id="save-imagery"
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
                  <td>{memoryCard.createdAt}</td>
               </tr>
               <tr>
                  <th className="text-muted" scope="row">
                     Last attempt:
                  </th>
                  <td>{memoryCard.lastAttemptAt}</td>
               </tr>
               <tr>
                  <th className="text-muted" scope="row">
                     Next attempt:
                  </th>
                  <td>{memoryCard.nextAttemptAt}</td>
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
