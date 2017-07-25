import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Icons
import NextArrow from 'icons/ic_keyboard_arrow_right_black_24px.svg'
import PrevArrow from 'icons/ic_keyboard_arrow_left_black_24px.svg'

// Paginator actions
import {
  nextPage,
  previousPage,
  setPage
} from '../actions'

// Stateless component for pagination buttons
const PaginationButton = ({symbol, activePageNumber, pageNumber, onClick}) => {
  let classes = ['button']
  if(activePageNumber === pageNumber && activePageNumber !== undefined) {
    classes.push('active')
  }
  return(
  <div className={classes.join(' ')}
       onClick={onClick}>
    {symbol}
  </div>
  )
}


class Pagination extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.generatePaginationButtons = this.generatePaginationButtons.bind(this)
  }

  generatePaginationButtons () {
    let buttons = []
    for(let i = 0; i < this.props.numberOfPages; i++) {
      buttons.push(
        <PaginationButton
            key={i}
            symbol={i+1}
            activePageNumber={this.props.currentPage}
            pageNumber={i}
            onClick={() => this.props.setPage(i)} />
      )
    }
    return buttons
}

  render() {
    const paginationButtons = this.generatePaginationButtons()
    return (
      <div className='pagination'>
        <PaginationButton
            symbol={<PrevArrow height={32} width={32} />}
            onClick={this.props.previousPage}
        />

        {paginationButtons}

        <PaginationButton
            symbol={<NextArrow height={32} width={32} />}
            onClick={this.props.nextPage}
        />
      </div>
    )
  }
}


function mapStateToProps (state, ownProps) {
  return {
    currentPage: state.pagination.currentPage,
    numberOfPages: state.pagination.numberOfPages
  }
}

function mapDispatchToProps (dispatch) {
  return {
    nextPage: bindActionCreators(nextPage, dispatch),
    previousPage: bindActionCreators(previousPage, dispatch),
    setPage: bindActionCreators(setPage, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)



