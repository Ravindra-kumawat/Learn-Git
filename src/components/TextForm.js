import React, { useState } from 'react'

export default function
    TextForm(props) {
    const textConvertUpperCase = () => {
        console.log("Convert To UpperCase Button Click");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const textConvertLowerCase = () => {
        console.log("Convert To LowerCase Button Click");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const textConvertSentenceCase = () => {
        // console.log("Convert To LowerCase Button Click");
        let Ltext = text.toLowerCase();
        let newText = Ltext.charAt(0).toUpperCase() + Ltext.slice(1);;
        setText(newText);
    }
    const textConvertCapitalized = () => {
        // console.log("Convert To LowerCase Button Click");
        let Ltext = text.toLowerCase();
        let newText = Ltext.replace(/\b[a-z]/g, (x) => x.toUpperCase());
        setText(newText);
    }
    const textConvertAlternatingCase = () => {
        // console.log("Convert To LowerCase Button Click");
        let Ltext = text.toLowerCase();
        let newText = Ltext.replace(/\b[a-z]/g, (x) => x.toUpperCase());
        setText(newText);
    }



    const handleOnChange = (event) => {
        console.log("on Change");
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here");

    return (
        <>
            <div>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={textConvertUpperCase}>Convert to Uppercase</button>
                <button className='btn btn-danger mx-1' onClick={textConvertLowerCase}>Convert to Lowercase</button>
                <button className='btn btn-danger mx-1' onClick={textConvertSentenceCase}>Convert to Sentence</button>
                <button className='btn btn-danger mx-1' onClick={textConvertCapitalized}>Convert to Capitalized</button>
                <button className='btn btn-danger mx-1' onClick={textConvertAlternatingCase}>Alternating Case</button>
            </div>
            <div>
                <h2>Total Charactar Length:{text.length}</h2>
                <h2>Total number of Words:{text.split(" ").length}</h2>
                <h2>Reading Time:{(0.008 * text.split(" ").length).toFixed(2)} Minuite</h2>
                <h2>Preview:</h2>
                <p>{text}</p>


            </div>
        </>

    )
}
