import React from 'react'
function ShowMore(props) {
    return (
        <button 
            className="products-ButtonShowMore"
            onClick={props.content.showMore}>
            Show more.
        </button>
    )
}
export default ShowMore