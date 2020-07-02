import actions from "../actions";

// action.payload, action.type
export default function editableCard(editableCard = {}, action) {
   let newEditableCard = { ...editableCard };
   switch (action.type) {
      case actions.STORE_EDITABLE_CARD:
         //
         newEditableCard.card = action.payload.card;
         //
         newEditableCard.prevRouse = action.payload.prevRoute;
         return newEditableCard;
      default:
         return editableCard;
   }
}
