import actions from "../actions";

// action.payload, action.type
export default function queuedCardsReducer(state = [], action) {
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         return action.payload;
      default:
         return state;
   }
}
