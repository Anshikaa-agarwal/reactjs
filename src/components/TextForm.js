import React, {useState} from 'react'

export default function TextForm(props) {

const [text, setText] = useState("Enter text here.");

const handleUpClick = () => {
  console.log("handleUpClick initiated");
  let newText = text.toUpperCase();
  setText(newText);
}

const handleLowClick = () => {
  console.log("handleLowClick initiated");
  let newText = text.toLowerCase();
  setText(newText);
}

const handleOnChange = (event) => {
  console.log("handleOnChange initialized.")
  setText(event.target.value);
}

return (
<>
<div className='container'>
  <br></br>
  <div className="mb-3">
  <label htmlFor="box" className="form-label"><h2>{props.heading}</h2></label>
  <textarea className="form-control" id="box" rows="9" value={text} onChange={handleOnChange}></textarea>
  </div>

  <div className="btns">
  <button className="btn btn-primary" onClick={handleUpClick}>Conver to Uppercase</button>
  <button className="btn btn-primary" onClick={handleLowClick}>Conver to Lowercase</button>
  </div>
</div>
<br />
<div className="container my-2">
  <h3>Your text summary here:</h3>
  <p>{text.split(" ").length} words and {text.length} characters.</p>
  <p>Time to read: {0.008 * text.split(" ").length} minutes</p>
  <p><h5 className='h5'>Text Preview:</h5> {text}
  </p>

</div>
</>
)
}
