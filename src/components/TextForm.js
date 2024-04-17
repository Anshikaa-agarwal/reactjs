import React, {useState} from 'react'

export default function TextForm(props) {

const handleUpClick = () => {
  console.log("handleUpClick initiated");
  let newText = text.toUpperCase();
  setText(newText);
}

const handleOnChange = (event) => {
console.log("handleOnChange initialized.")
setText(event.target.value);
}

const [text, setText] = useState("Enter text here.");
return (
<div>
  <br></br>
  <div className="mb-3">
  <label htmlFor="box" className="form-label">{props.heading}</label>
  <textarea className="form-control" id="box" rows="9" value={text} onChange={handleOnChange}></textarea>
  </div>

  <button className="btn btn-primary" onClick={handleUpClick}>Conver to Uppercase</button>
</div>
)
}
