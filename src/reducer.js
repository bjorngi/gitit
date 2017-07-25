// This file combines all reducers and initial state. For bigger projects this would be split up into several files for each part of the redux state
import { combineReducers } from 'redux'

// Repository actions
import {
  ADD_REPOSITORIES
} from './actions'

// Pagination actions
import {
  NEXT_PAGE,
  PREVIOUS_PAGE,
  SET_PAGE,
  SET_NUMBER_OF_PAGES
} from './actions'

const initialState = {
  repositories: {
    loaded: false,
    active: undefined,
    items: []
  },
  pagination: {
    numbersPerPage: 20,
    currentPage: 0,
    numberOfPages: undefined
  }
}

function repositoryReducer(state = initialState.repositories, action) {
  switch (action.type) {
    case ADD_REPOSITORIES:
      return Object.assign(
        {},
        state,
        { loaded: true },
        { items: action.repositories.items}
      )
    default:
      return state
  }
}

function paginationReducer(state = initialState.pagination, action) {
  switch(action.type) {
    case NEXT_PAGE:
      if(state.currentPage < (state.numberOfPages-1)) {
      return Object.assign(
        {},
        state,
        {
          currentPage: state.currentPage + 1
        }
      )} else {
        return state;
      }
    case PREVIOUS_PAGE:
      if(state.currentPage > 0) {
        return Object.assign(
          {},
          state,
          {
            currentPage: state.currentPage - 1
          })
      } else {
        return state;
      }
    case SET_PAGE:
      return Object.assign(
        {},
        state,
        {
          currentPage: action.number
        })
  case SET_NUMBER_OF_PAGES:
      return Object.assign(
        {},
        state,
        {
          numberOfPages: action.numberOfPages
        }
      )
  default:
    return state
  }
}


const rootReducer = combineReducers({
  repositories: repositoryReducer,
  pagination: paginationReducer
})

export default rootReducer
