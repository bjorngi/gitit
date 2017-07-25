import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Repository from 'components/repository'

class RepositoryList extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.renderRepositoryList = this.renderRepositoryList.bind(this)
  }

  // Function that renders slice of repositories
  renderRepositoryList (currentPage, numbersPerPage, repositories) {
    // Calculates the index of start of array to be displayed
    const sliceBegin = currentPage * numbersPerPage

    // Calculates the end for array to be displayed
    const sliceEnd = sliceBegin + numbersPerPage

    // Slices repository array between the two values
    const repositorySlice = repositories.slice(sliceBegin, sliceEnd)

    // Maps over the slice of repositories to create an individuel component for each for them
    return repositorySlice.map((repo) => {
      return <Repository
                 key={repo.id}
                 name={repo.name}
                 owner={repo.owner}
                 description={repo.description}
                 stars={repo.stargazers_count}
                 url={repo.html_url}
                 openIssues={repo.open_issues_count}
                 forks={repo.forks_count}
             />
    })
  }

  render() {
    // If repositories is not yet loaded, display this message
    if(!this.props.loaded) {
      return (
        <div className="loading">
          Fetching repositories
        </div>
      )
    } else {

      // Generate repository components
      const repositoryList = this.renderRepositoryList(this.props.currentPage,
                                                       this.props.numbersPerPage,
                                                       this.props.repositores)
      return (
        <div className='repositories'>
          {repositoryList}
        </div>
      )
    }
  }
}

// This component has no actions and mapDispatchToProps is omitted. The dispatch function is still available under props.
function mapStateToProps (state, ownProps) {
  return {
    loaded: state.repositories.loaded,
    repositores: state.repositories.items,
    currentPage: state.pagination.currentPage,
    numbersPerPage: state.pagination.numbersPerPage
  }
}


export default connect(mapStateToProps)(RepositoryList)
