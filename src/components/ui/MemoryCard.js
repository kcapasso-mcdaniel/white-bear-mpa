import React from "react";
import editIcon from "../../icons/edit.svg";
import { Link } from "react-router-dom";

export default function MemoryCard(props) {
   return (
      <div className="d-flex">
         <div className="app-card flex-fill">
            <div className="card mt-4">
               <div className="card-body bg-primary all-cards">
                  {props.imagery}
               </div>
            </div>

            <div className="card">
               <div className="card-body bg-secondary all-cards">
                  {props.answer}
               </div>
            </div>
         </div>

         <Link to="edit" className="btn btn-link mt-2 ml-2">
            <img
               src={editIcon}
               width="20px"
               style={{ marginBottom: "3px", marginRight: "5px" }}
               alt=""
            />
            Edit
         </Link>
      </div>
   );
}
