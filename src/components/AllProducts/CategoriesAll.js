import React from 'react'
function CategoriesAll(props) {
    return (
        <div className="CategoriesAll-box">
            <ul className="CategoriesAll-CatList">
                <li onClick={props.content.categoriesByTypeBlack}> Black tea </li>
                <li onClick={props.content.categoriesByTypeGreen}> Green tea </li>
                <li onClick={props.content.categoriesByTypeOolong}> Oolong tea </li>
                <li onClick={props.content.categoriesByTypeWhite}> White tea </li>
            </ul>
            <ul className="CategoriesAll-SortList">
                <li onClick={props.content.sortValueHighest}>
                    Sort by Price
                </li>
                <li onClick={props.content.sortValueByName}>
                    Sort by Name
                </li>
            </ul>
        </div>
    )
}
export default CategoriesAll