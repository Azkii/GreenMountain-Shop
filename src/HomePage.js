import React from 'react'
function HomePage(props) {
    return (
        <div className="homePage" ref={props.content.HomePageRef}>
            <div className="homePage-PhotoSection">
                <div className="homePage-Text">
                    <h1>Try Out our new Bubble tea</h1>
                    <p>Donec dolor metus, suscipit sed placerat vel, fermentum vitae felis. Donec dolor metus, suscipit sed placerat vel, fermentum vitae felis </p>
                    <button>ORDER HERE.</button>
                </div>
            </div>
        </div>
    )
}
export default HomePage