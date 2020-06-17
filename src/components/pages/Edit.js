import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import saveIcon from "../../icons/save.svg";

export default function Edit() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h4 className="my-4 text-center text-muted">Edit card</h4>

         <div className="mb-3">
            <div className="card bg-primary">
               <div className="card-body">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly
                  able to cover it and seemed ready to slide off any moment.
               </div>
            </div>
            <div className="card bg-secondary">
               <div className="card-body">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly
                  able to cover it and seemed ready to slide off any moment.
               </div>
            </div>
         </div>

         <p className="float-right mb-5">205/240</p>

         <div className="clearfix"></div>

         <button className="btn btn-link" id="back-to-answer-imagery">
            Discard changes
         </button>

         <a
            href="all-cards.html"
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
         </a>
         <h4 className="all-cards text-muted text-center py-4 mt-4">
            Card properties
         </h4>
         <table className="table table-responsive table-borderless">
            <thead>
               <tr>
                  <th className="text-muted" scope="row">
                     Created on:
                  </th>
                  <td>Dec. 24, 2019</td>
               </tr>
               <tr>
                  <th className="text-muted" scope="row">
                     Last attempt:
                  </th>
                  <td>Dec. 31, 2019</td>
               </tr>
               <tr>
                  <th className="text-muted" scope="row">
                     Next attempt:
                  </th>
                  <td>Jul. 14, 2020</td>
               </tr>
               <tr>
                  <th className="text-muted" scope="row">
                     Consecutives:
                  </th>
                  <td>4</td>
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

         <a
            href="all-cards.html"
            type="button"
            className="btn btn-outline-danger mt-4"
            id="delete-button"
         >
            Delete this card
         </a>
      </AppTemplate>
   );
}
