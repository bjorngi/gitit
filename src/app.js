// React
import React from 'react'
import ReactDOM from 'react-dom';

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// API calls
import { getGithubRepositories } from './api'

// Actions
import {
  addRepositories,
  setNumberOfPages
} from './actions'

// Components
import RepositoryList from 'components/repositoryList'
import Pagination from 'components/pagination'


class App extends React.Component {
  componentDidMount() {
    getGithubRepositories().then((repositories) => {
      this.props.addRepositores(repositories)
      const numberOfPages = repositories.items.length / this.props.numbersPerPage
      this.props.setNumberOfPages(numberOfPages)
    })
  }

  render () {
    return (
      <div>
      <Pagination />
      <RepositoryList />
      <Pagination />
      </div>
    )
  }
}


// Maps data from redux storage to props
function mapStateToProps (state, ownProps) {
  return {
    numbersPerPage: state.pagination.numbersPerPage
  }
}

// Combines actions with the dispatch function and places it as props
function mapDispatchToProps (dispatch) {
  return {
    addRepositores: bindActionCreators(addRepositories, dispatch),
    setNumberOfPages: bindActionCreators(setNumberOfPages, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
