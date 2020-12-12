import React from 'react'
import {Link} from 'react-router-dom'
function ShowAll() {
    return (
        <Link to="/product/">
            <button className="products-ButtonShowMore">
                Show All.
            </button>
        </Link>
    )
}
export default ShowAll