import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import editIcon from "../../icons/edit.svg";
import { Link } from "react-router-dom";

export default function AllCards() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         {/* <!-- Search menu  --> */}
         <div className="d-inline">
            <input
               className="search w-50 ml-4"
               type="text"
               placeholder="Search"
               aria-label="Search"
            />
            <button className="btn btn-primary ml-4" type="submit">
               Search
            </button>
         </div>
         {/* <!-- Dropdown menu --> */}
         <div className="d-inline-flex">
            <h4 className="all-cards-important">Sort cards by</h4>
            <select>
               <option>Most Recent</option>
               <option>Oldest</option>
               <option>Hardest</option>
               <option>Easiest</option>
            </select>
         </div>
         {/* <!-- Cards --> */}
         <div className="card mt-4">
            <div className="card-body bg-primary all-cards">
               One morning, when Gregor Samsa woke from troubled dreams, he
               found himself transformed in his bed into a horrible vermin. He
               lay on his armour-like back, and if he lifted his head a little
               he could see his brown belly, slightly domed
            </div>
         </div>
         <div className="card">
            <div className="card-body bg-secondary all-cards">
               One morning, when Gregor Samsa woke from troubled dreams, he
               found himself transformed in his bed into a horrible vermin. He
               lay on his armour-like back, and if he lifted his head a little
               he could see his brown belly, slightly domed
            </div>
         </div>
         <a href="edit.html" className="float-right btn btn-link">
            <img
               src={editIcon}
               width="20px"
               style={{ marginBottom: "3px" }}
               alt=""
            />
            Edit
         </a>
         <div className="card">
            <div className="card-body bg-primary all-cards">
               One morning, when Gregor Samsa woke from troubled dreams, he
               found himself transformed in his bed into a horrible vermin. He
               lay on his armour-like back, and if he lifted his head a little
               he could see his brown belly, slightly domed
            </div>
         </div>
         <div className="card ">
            <div className="card-body bg-secondary all-cards">
               One morning, when Gregor Samsa woke from troubled dreams, he
               found himself transformed in his bed into a horrible vermin. He
               lay on his armour-like back, and if he lifted his head a little
               he could see his brown belly, slightly domed
            </div>
         </div>
         <Link to="edit" className="float-right btn btn-link">
            <img
               src={editIcon}
               width="20px"
               style={{ marginBottom: "3px", marginRight: "5px" }}
               alt=""
            />
            Edit
         </Link>
      </AppTemplate>
   );
}
