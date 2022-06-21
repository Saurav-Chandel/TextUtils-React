// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About'
import React, {useState} from 'react';




import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
                                          
  const [mode,setMode]=useState('light');  
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
     setAlert(null)
    }, 1500);
  }

  const toggleMode= () =>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor= '#042743';
    showAlert("dark mode has been enables","success")
    document.title='TextUtils - Dark Mode'  //change the title of browser tab text.
   }
  else{
    setMode('light')
    document.body.style.backgroundColor= 'white';
    showAlert("light mode has been enables","success")
    document.title='TextUtils - Light Mode'


   }
  }

  return (
    
    //jsx fragment
    <> 
    <Router>
    <Navbar title='TextUtils' aboutText="About" mode={mode} toggleMode={toggleMode} />  
    <Alert alert={alert}/>
    <div className="container my-5"> 
    <Routes>
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />} />
      <Route path="about/*" element={<About/>} />
    </Routes>
        
    </div>
    </Router>
    
    
    </>
  );
}

export default App;
