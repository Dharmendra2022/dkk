import React from "react";
import "./Allsubjects.css";
import { Link } from "react-router-dom";

//class Subject extends React.Component{
    const Assignment = (props)=>{
    const num=["Discrete Mathematics","Automata Theory","Database Management System","Design and Analysis of Algorithm","Computer Network","Data Structure","Machine Learning"];
    console.log(num);

    
        return(
            <div className="allsubjects">
                <h1> Welcome to all in  CS/IT class!</h1>
                <p>Download Material</p>
                <div className="allsub">
                    
                    {num.map((data)=>{
                        
                        return( <div className="subname"> <Link to={"/discrete_layout"}  >{data}</Link></div>
                    
                       )
                    }
                    )}

                </div>
                
               
            </div>
        )
    
}

export default Assignment;