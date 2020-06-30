import actions from "../actions";

// action.payload, action.type
export default function currentUserReducer(state = [], action) {
   switch (action.type) {
      case actions.STORE_CURRENT_USER:
         return action.payload;
      default:
         return state;
   }
}
