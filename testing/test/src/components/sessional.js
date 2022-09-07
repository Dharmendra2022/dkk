import React from "react";
import { Link } from "react-router-dom";
import "./aktuques.css";
import Sesstype from "./sesstype";

//class Subject extends React.Component{
    const Sessional = (props)=>{
    const num=[2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011];
    console.log(num);

    
        return(
            <div className="aktuques">
                <h1> Welcome to all in {props.name} class!</h1>
                <p>Download Sessional Previous Year Question Papers</p>
                <div className="paper">
                   
                        {num.map((data)=>{
                        

                        return( 
                        
                        <div className="subname"> <Link to={"/"+props.name+"/sesstype/"+data }   >Year-{data}</Link></div>
                    
                       )
                    }
                    )}

                        
                    

                </div>
                
               
            </div>
        )
    
}

export default Sessional;