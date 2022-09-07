import React from 'react';
import PropTypes from "prop-types"
import "./App.css"
import Subject from './components/Subject';
import {Link} from "react-router-dom";
import Img from "./image1.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import "./tt.css"
//const App = () =>{
  class App extends React.Component{
 /* constructor(props) {  
    super(props);
    this.state={
      name:"JavaTPoint",
    }
  }
*/

  render(){ 
  return(
    <div>  
     
      
      <div className="header">
        <div className='title'> <h1> GRID Learning Platform</h1></div>
     <div className='navbar'>
        <div className='button'>
          <a href="#" >Home </a>
        </div>
        <div className='button'>
          <a href="/allsubject" >Subject </a>
        </div>

        <div className='button'>
          <a href="#" >Faculties </a>
        </div>
        <div className='button'>
          <a href="#" >Aboutus </a>
        </div>
        <div className='button'>
          <a href="#" >Contact us </a>
        </div>

        </div>
      </div>   
      <div className="section">
        <div className="left">
        <div className='button2'>

        <Link to={"/discrete_layout" }>Discrete Mathematics </Link>
        </div>
        <div className='button2'>
        <Link to={"/automata_layout" }>Automata Theory </Link>
          
        </div>
        <div className='button2'>
          <Link to={"/dbms_layout"} >Database Management System </Link>
        </div>
        <div className='button2'>
          <Link to={"/algorithm_layout"} >Design and Analysis of Algorithm </Link>
        </div>
        <div className='button2'>
          <Link to={"/network_layout"} >Computer Network</Link>
        </div>
        
        <div className='button2'>
          <Link to={"/datastructure_layout"} >Data Structure</Link>
        </div>
        <div className='button2'>
          <Link to={"/machine_layout"} >Machine Learning</Link>
        </div>
        </div>

        <div className="center">
        <h1> Computer Science </h1>

      

        </div> 

        <div className="right">
            <div className='button2'>
                <Link to={"/gate_ques" }>GATE Previous Year Question Papers </Link>
            </div>
            <div className='button2'>
                <Link to={"/automata_layout" }>Infosys Recruitment Question Papers</Link> 
            </div>
            <div className='button2'>
                <Link to={"/dbms_layout"} >TCS Recuritment Question Papers</Link>
            </div>
        
        </div> 
      </div>

      <div className='sec2'>
        <h2>
          Section2
        </h2>
      </div>
      <div className='sec3'>
        <h2>
          Section3
        </h2>
      </div>
      <div className='sec4'>
        <h2>
          How can we learn ?
        </h2>
      </div>

</div>
  )}
  }

export default App;
