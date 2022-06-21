
import React, {useState} from 'react';    //rfc


export default function TextForm(props) {
  const handeUpClick = ()=>{              //onClick Event Handler     
    // console.log('upper case is clicked' + text);
    let upCase=text.toUpperCase();
    setText(upCase)
    props.showAlert("Converted to UpperCase!","success")
}

  const handelowerClick = ()=>{                 
    
    let lowerCase=text.toLowerCase();
    setText(lowerCase)
    props.showAlert("Converted to LowerCase!","success")

  } 

  const hendlerCopyClick = () =>{
    console.log("copys");
    let copy=document.getElementById('exampleFormControlTextarea1')
    copy.select();
    navigator.clipboard.writeText(copy.value)
    props.showAlert("Copy to clipboard","success")

  }

  const hendlerClearClick = () =>{
    const clearText="";
    setText(clearText)
    props.showAlert("Clear text Successfully","success")

  }
  const hendlerCapClick = () =>{
    let splitStr = text.toLowerCase().split(" ");
    console.log(splitStr);
    for (let i = 0; i < splitStr.length; i++) {
     //  console.log((i));
     //  console.log(splitStr[i].charAt(0).toUpperCase());
     //  console.log(splitStr[i].substring(1));
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    props.showAlert("Capitalize Text Successfuly","success")

      }
      setText(splitStr.join(' '));
  }
  const handleExtraSpace = () =>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces Removed","success")

  }

  const handelOnChange = (event)=>{    //onChange Event Handler
    // console.log(event)
    // console.log('On change');
    setText(event.target.value)
  }
  const [text, setText] = useState('');   //text is a state and setText is used to update the text state.
  // text="new text"  //wrong way to change the state.
  // setText("saurav chandel");   //correct way to change the state.
  return (
    <>
  
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* // {single bracket is used to indicate that we write a javascript }  and {{double bracket is used to write javascript object}} */}
          <textarea  className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="9"></textarea> 
          {/* onChange={handelOnChange}   Event Handler */}
          <button className="btn- btn-success my-2 mx-2 rounded" onClick={handeUpClick} >Convert to UpperCase</button>
          <button className="btn- btn-success my-2 mx-2 rounded" onClick={handelowerClick} >Convert to LoweCase</button>
          <button className="btn- btn-success my-2 mx-2 rounded" onClick={hendlerCopyClick} >Copy the text</button>
          <button className="btn- btn-success my-2 mx-2 rounded" onClick={hendlerClearClick} >Clear text</button>
          <button className="btn- btn-success my-2 mx-2 rounded" onClick={hendlerCapClick} >Captitalized Text</button>
          <button className="btn- btn-success my-2 mx-2 rounded" onClick={handleExtraSpace} >Remove Extra Space</button>
        </div>
    </div>
    {/* agr props.mode == dark hai to white krdo otherwise black */}
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>  
      <h1>Your text Summary</h1>
      
      {(() => {
      if (text.length === 0) {
        return( 
          <p><b>{0}</b> words and <b>{text.length}</b> characters</p>
        )}
      else {
        return (<p><b>{text.split(" ").length-1}</b> words and <b>{text.length}</b> characters</p>)}
      })()}
      
      <p><b>{0.008 * text.split(" ").length}</b> Time takes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
