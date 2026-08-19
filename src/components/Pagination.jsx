import { Component } from 'react'
import '../styles/Pagination.css'

export default class Pagination extends Component {
    
    render() {
        let { handleNext, handlePrev, page } = this.props;
        return (
            <>
            <div className='pagination-container'>
                <button disabled={page <= 1} className='nav-btn' onClick={handlePrev} >
                    &larr; Previous
                </button>
                {/* the api has limits to page 5 i hardcoded it, since this is project not for others */}
                <button disabled={page >= 5} className="nav-btn" onClick={handleNext}>
                    Next &rarr;
                </button>
            </div>
            </>
        )
  }
}
