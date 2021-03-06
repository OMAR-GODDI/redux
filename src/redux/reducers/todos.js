import { ADD_TODO, TOGGLE_TODO, EDIT_TASK  } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    case EDIT_TASK:
        const { id } = action.payload;
    
      return {
        ...state,
        allIds: state.todos.map((byIds) =>
        byIds.id === action.payload.id ? action.payload : byIds
        ),
      };
    default:
      return state;
  }
}
