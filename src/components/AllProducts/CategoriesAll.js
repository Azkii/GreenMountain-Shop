import React from 'react'
function CategoriesAll() {
    return (
        <div className="CategoriesAll-box">
            <ul className="CategoriesAll-CatList">
                <li> Black tea </li>
                <li> Green tea </li>
                <li> Oolong tea </li>
                <li> White tea </li>
            </ul>
            <ul className="CategoriesAll-SortList">
                <li>
                    Sort by Price
                </li>
                <li>
                    Sort by Name
                </li>
            </ul>
        </div>
    )
}
export default CategoriesAll