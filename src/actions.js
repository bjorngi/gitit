// Actions for repositories
export const ADD_REPOSITORIES = 'ADD_REPOSITORIES'

export function addRepositories(repositories) {
  return {
    type: ADD_REPOSITORIES,
    repositories
  }
}
// Actions for pagination
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREVIOUS_PAGE = 'PREV_PAGE'
export const SET_PAGE = 'SET_PAGE'
export const SET_NUMBER_OF_PAGES = 'SET_NUMBER_OF_PAGES'

export function nextPage() {
  return {
    type: NEXT_PAGE
  }
}

export function previousPage() {
  return {
    type: PREVIOUS_PAGE
  }
}

export function setPage(number) {
  return {
    type: SET_PAGE,
    number
  }
}

export function setNumberOfPages(numberOfPages) {
  return {
    type: SET_NUMBER_OF_PAGES,
    numberOfPages
  }
}
