import React from "react";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data.js/memory-cards";

export default function AllCards() {
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
         </div>

         {memoryCards.map((memoryCard) => {
            return (
               <MemoryCard
                  answer={memoryCard.answer}
                  imagery={memoryCard.imagery}
                  key={memoryCard.id}
               />
            );
         })}
      </AppTemplate>
   );
}
