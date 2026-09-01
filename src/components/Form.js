import React, {useState} from 'react'

export default function Form(props) {

    const [text, setText] = useState("");                   // Enter you text here =text = setTest

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }

     const handleClearClick = () =>{
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const btnColor = { backgroundColor: "#FFA31A" };
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="8" 
            style={{backgroundColor: props.mode === 'black' ? 'gray' : 'white',
                    color: props.mode === 'black' ? 'white' : 'black'}}>
            </textarea>       
  
            <button className="btn  my-2" onClick={handleUpClick} style= {btnColor}>Convert to upper case</button>
            <button className="btn  my-2 mx-2" onClick={handleLoClick} style= {btnColor}>Convert to lower case</button>
            <button type="button" className="btn  my-2" onClick={handleClearClick} style= {btnColor}>Clear text</button>
        </div>
        <h3>Test Summary</h3>
        <p>You had written {text.split(" ").length-1} Words and {text.length} Letters.</p>
        <h3>Preview</h3><hr/>
        <p>{text.length===0 ? "Enter your text first" : text}</p>
    </div>
  )
}
