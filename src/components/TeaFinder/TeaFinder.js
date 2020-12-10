import React from 'react'
import './TeaFinder.css'
function TeaFinder() {
    let firstPage = 
        <div className="teaFinder-FormPage">
            <p>
                <span>What flavore do you like the most ?</span>
            </p>
            <ul>
                <li> Sweet. </li>
                <li> Sour. </li>
                <li> Bitter. </li>
                <li> Suprise me. </li>
            </ul>
        </div>
    let secondPage = 
        <div className="teaFinder-FormPage">
            <p>
                <span>Do you </span>
            </p>
            <ul>
                <li> Sweet. </li>
                <li> Sour. </li>
                <li> Bitter. </li>
                <li> Suprise me. </li>
            </ul>
        </div>
    let thirdPage = 
        <div className="teaFinder-FormPage">
            <p>
                <span>What flavore do you like the most ?</span>
            </p>
            <ul>
                <li> Sweet. </li>
                <li> Sour. </li>
                <li> Bitter. </li>
                <li> Suprise me. </li>
            </ul>
        </div>
    return (
        <div className="teaFinder-Box" >
            <h1 className="teaFinder-Title">TeaFinder.</h1>
            <div className="teaFinder-Form">
                {firstPage}
            </div>
            <div className="teaFinder-Progress">
                    <div className="teaFinder-ProgressFlag1">1</div>
                    <div className="teaFinder-ProgressFlag2">2</div>
                    <div className="teaFinder-ProgressFlag3">3</div>
                    <div className="teaFinder-ProgressResult">Result</div>
                <div className="teaFinder-ProgressLine"></div>
            </div>
        </div>
    )
}
export default TeaFinder