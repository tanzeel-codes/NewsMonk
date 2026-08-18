import { Component } from 'react'
import '../styles/Pagination.css'

export default class Pagination extends Component {
    

    render() {
        let {theme, handleNext, handlePrev, page, nextPageAvail} = this.props;
        return (
            <>
            <div className='pagination-container' data-theme={theme}>
                <button disabled={page <= 1} className='nav-btn' onClick={handlePrev} >
                    &larr; Previous
                </button>
                <button disabled={nextPageAvail} className="nav-btn" onClick={handleNext}>
                    Next &rarr;
                </button>
            </div>
            </>
        )
  }
}
