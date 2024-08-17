import React,{useState} from 'react'

export default function Textform(props) {
  
  const handleUpClick = ()=>{
    console.log("Upperclass was clicked" + Text);
    let newtext=Text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase","success");
  }
  const handleLoClick = ()=>{
    let newtext=Text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LpperCase","success");
  }
  const handleclrClick = ()=>{
    let newtext=("");
    setText(newtext);
    props.showAlert("Clear the text","success");
  }
  const handleOnChange = (event)=>{
    console.log("on change");
    //with this we can set new values
    setText(event.target.value);
   
  }
  const handlecopy = () =>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    // to remove the copy text
    document.getSelection().removeAllRanges();
    props.showAlert("Copy the text","success");
  }
  const Extraspace= ()=>{
   let newtext=Text.split(/[ ]+/);
   setText(newtext.join(" "))
   props.showAlert("Remove  the extra space","success");
  }
  const [Text, setText] = useState('');
  // setText("new text");
return (
  <>
          <div className="container" style={{color:props.mode==='dark'?'white':'black'
                }} >
                  {/* 2 curlii braces one for js and one for object */}
             <h1 className="mb-2">{props.heading}</h1>
              <div className="mb-3">
              <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='dark'?'white':'#042743'
                }} id="myBox" rows="10"></textarea>
              </div>
                <button disabled={Text.length===0} className = "btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button  disabled={Text.length===0}  className = "btn btn-primary mx-1 my-2" onClick={handleLoClick} >Convert to Lowercasecase</button>
                <button  disabled={Text.length===0} className = "btn btn-primary mx-1" onClick={handleclrClick} >clear text</button>
                <button disabled={Text.length===0}  className = "btn btn-primary mx-1 my-2" onClick={handlecopy} >Copy text</button>
                <button  disabled={Text.length===0}  className = "btn btn-primary mx-1 my-2" onClick={Extraspace} >Remove Extra Space</button>
            </div>
            <div className="conatiner my-3"  style={{color:props.mode==='dark'?'white':'black'
                }}>
              <h1>Your text </h1>
              {/* using filter method toremove unneccesary word count */}
              <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} character </p>
              <p>Time required = {0.008*Text.split(" ").filter((element)=>{return element.length!==0}).length} min</p>
              <h2>preview</h2>
              <p>{Text.length>0 ? Text:"Nothing to preview !"}</p>
              </div>
  </>
       
            //here we use onChange with the help of which we r able to write
         
    
   
  )
}
