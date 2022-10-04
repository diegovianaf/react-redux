import { configureStore } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  tasks: [
    'Learning Redux'
  ]
}

function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload,
        ]
      }
  
    default:
      return state
  }
}

const store = configureStore({ reducer: todo })

export default store
