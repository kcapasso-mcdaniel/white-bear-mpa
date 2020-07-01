import actions from "../actions";

// action.payload, action.type
export default function queue(queue = {}, action) {
   let newQueue = { ...queue };
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         // copy of the state and then change it
         newQueue.cards = action.payload;
         return newQueue;
      case actions.UPDATE_INDEX_OF_CURRENT_CARD:
         newQueue.index = newQueue.index + 1;
         return newQueue;
      default:
         return queue;
   }
}
