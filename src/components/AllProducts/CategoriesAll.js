import React from 'react'
function CategoriesAll(props) {
    return (
        <div className="CategoriesAll-box">
            <ul className="CategoriesAll-CatList">
                <li className={props.content.catBlackTea ? "CategoriesAll-CatListHovered CategoriesAll-HoveredColor" : ""} onClick={props.content.categoriesByTypeBlack}> Black tea </li>
                <li className={props.content.catGreenTea ? "CategoriesAll-CatListHovered CategoriesAll-HoveredColor" : ""} onClick={props.content.categoriesByTypeGreen}> Green tea </li>
                <li className={props.content.catOolongTea ? "CategoriesAll-CatListHovered CategoriesAll-HoveredColor" : ""} onClick={props.content.categoriesByTypeOolong}> Oolong tea </li>
                <li className={props.content.catWhiteTea ? "CategoriesAll-CatListHovered CategoriesAll-HoveredColor" : ""} onClick={props.content.categoriesByTypeWhite}> White tea </li>
            </ul>
            <ul className="CategoriesAll-SortList">
                <li onClick={props.content.sortValueHighest}>
                    Sort by Price
                </li>
                <li className={props.content.sortByName ? "CategoriesAll-HoveredColor" : ""} onClick={props.content.sortValueByName}>
                    Sort by Name
                </li>
            </ul>
        </div>
    )
}
export default CategoriesAll