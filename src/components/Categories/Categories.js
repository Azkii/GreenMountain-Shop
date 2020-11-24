import React,{useState} from 'react'
import './Categories.css'
import './CategoriesMobile.css'
function Categories(props) {
    const [click, setClick] = useState(true)
    const handleClick = () => setClick(!click)
    const [click2, setClick2] = useState(true)
    const handleClick2 = () => setClick2(!click2)
    return (
        <div className="categories-container">
            <div className="categories-box">
                <div className="categories-title">
                    <h1>CATEGORIES</h1>
                    <div onClick={handleClick} className={click ? "categories-plus" : "categories-plus categories-plusTransition"} >+</div>
                </div>
                <div>
                    <ul className={click ? "show-Dummy" : "categories-options"}>
                        <li className={props.content.catBlackTea ? "categories-option categories-optionClicked" : "categories-option" } onClick={props.content.categoriesByTypeBlack} >Black tea</li>
                        <li className={props.content.catGreenTea ? "categories-option categories-optionClicked" : "categories-option" } onClick={props.content.categoriesByTypeGreen} >Green tea</li>
                        <li className={props.content.catOolongTea ? "categories-option categories-optionClicked" : "categories-option" } onClick={props.content.categoriesByTypeOolong} >Oolong tea</li>
                        <li className={props.content.catWhiteTea ? "categories-option categories-optionClicked" : "categories-option" } onClick={props.content.categoriesByTypeWhite} >White tea</li>
                    </ul>
                </div>
            </div>
            <div className="categories-box">
                <div className="categories-title">
                    <h1>Filter by</h1>
                    <div onClick={handleClick2} className={click2 ? "categories-plus" : "categories-plus categories-plusTransition"}>+</div>
                </div>
                <div className={click2 ? "show-Dummy" : "filterby-Box" } >
                    <div className="filterby-Name">
                        Name A-Z
                    </div>
                    <div className="filterby-price">
                        <p>Price</p>
                        <div onClick={props.content.sortValue}>
                            from lowest
                        </div>
                        <div>
                            from highest
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Categories