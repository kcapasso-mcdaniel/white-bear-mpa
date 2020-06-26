import React from "react";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data.js/memory-cards";

export default class AllCards extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         allMemoryCards: memoryCards,
         filteredCards: memoryCards,
      };
   }

   filteredCardList() {
      const searchInput = document
         .getElementById("search-input")
         .value.toLowerCase();
      console.log(searchInput, "this is the search input");
      const allMemoryCards = [...this.state.allMemoryCards];
      const filteredCards = allMemoryCards.filter((memoryCard) => {
         let filteredCard = memoryCard.imagery + memoryCard.answer;
         return filteredCard.indexOf(searchInput) >= 0;
      });
      this.setState({ filteredCards });
      console.log(filteredCards);
   }

   render() {
      return (
         <AppTemplate>
            {/* <!-- Search menu  --> */}
            <div className="row">
               <div className="col-6">
                  <input
                     className="form-control form-control-sm"
                     type="text"
                     placeholder="Search"
                     id="search-input"
                  />
               </div>

               <div className="col-4">
                  <button
                     className="btn btn-primary btn-block btn-sm"
                     type="button"
                     id="search-button"
                     onClick={() => {
                        this.filteredCardList();
                     }}
                  >
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
            {this.state.filteredCards.map((memoryCard) => {
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
}
