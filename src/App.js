import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';

import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route}
  from 'react-router-dom';

function App() {
  const[mode, setMode]=useState('light');//wether dark mode is enable or not
  // for Alert
 const[alert, setalert]= useState(null);
 const showAlert = (message,type)=>{
     setalert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setalert(null); //so that after 3sec alert will disable
     }, 1500);
 }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background ='#042743';
      showAlert("Dark mode has been enabled","success")
      // document.title='Textutils-darkmode'
    }else{
      setMode('light');
      document.body.style.background ='white';
      showAlert("Light mode has been enabled","success")
      // document.title='Textutils-darkmode'
      
    }

  }
  return (
    //jsx fragment
  <>
  {/* <Navbar/> */}
    <Router>
       <Navbar title="TextUtiles" mode={mode} toggleMode = {toggleMode}/>
       <Alert alert={alert} />
       <div className="container my-3">
          <Routes>
          {/* <Route exact path="/about">
          <About mode ={mode}/>
          </Route>
          <Route exact path="/" >
          <Textform  showAlert={showAlert}heading="Enter the text to analyze below" mode={mode}/>
        </Route> */}
      
           
          <Route exact path="/about" element ={<About/>}/>
          <Route exact path="/" element ={ <Textform  showAlert={showAlert}heading=" Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}/>
          </Routes>
           
           
       </div>
       </Router>
  </>
  );
}

export default App;
