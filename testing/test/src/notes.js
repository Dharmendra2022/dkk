import React from "react";
import "./notes.css";
//class Subject extends React.Component{
    const Notes = (props)=>{
    const num=[1,2,3,4,5];
    console.log(num);

    
        return(
            <div className="notes">
                <h1> Welcome to all in {props.name} class!</h1>
                <p>Download notes</p>
                <div className="sub">
                    
                    {num.map((data)=>{
                        
                        return( <div className="subname"> <a href={props.name+"/notes/Unit-"+data+".pdf"} target="_blank" >Unit-{data}</a></div>
                    
                       )
                    }
                    )}
                    
                </div>
                <div className="comp"><a href={props.name+"/notes/complete_notes.pdf"} target="_blank">Complete Notes</a></div>
                
            </div>
        )
    
}

export default Notes;