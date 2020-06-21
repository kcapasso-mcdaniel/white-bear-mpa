import React from "react";
import AppTemplate from "../ui/AppTemplate";
import editIcon from "../../icons/edit.svg";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data.js/memory-cards";
// select a specific memory card
const memoryCard = memoryCards[0];

export default function AllCards() {
   console.log(memoryCards);
   return (
      <AppTemplate>
         {/* <!-- Search menu  --> */}
         <div className="row">
            <div className="col-6">
               <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Search"
               />
            </div>
            <div className="col-4">
               <button className="btn btn-primary btn-block btn-sm">
                  Search
               </button>
            </div>
         </div>
         {/* <!-- Dropdown menu --> */}
         <div className="row mt-4">
            <div className="col-6">
               <p className="mt-2">Sort cards by</p>
            </div>
            <div className="col-6">
               <select className="w-100">
                  <option>Most Recent</option>
                  <option>Oldest</option>
                  <option>Hardest</option>
                  <option>Easiest</option>
               </select>
            </div>
            {/* <!-- Cards --> */}
            <div className="card mt-4">
               <div className="card-body bg-primary all-cards">
                  {memoryCard.imagery}
               </div>
            </div>
            <div className="card">
               <div className="card-body bg-secondary all-cards">
                  {memoryCard.answer}
               </div>
            </div>

            <Link to="edit" className="d-flex btn btn-link">
               <img
                  src={editIcon}
                  width="20px"
                  style={{ marginBottom: "3px", marginRight: "5px" }}
                  alt=""
               />
               Edit
            </Link>
         </div>
      </AppTemplate>
   );
}
