import React from "react";
import "./Subject.css";
//class Subject extends React.Component{
    const Subject = (props)=>{
    const num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];
    console.log(num);

    
        return(
            <div className="subject">
                <h1> Welcome to all in {props.name} class!</h1>
                <p>Download notes</p>
                <div className="sub">
                    
                    {num.map((data)=>{
                        
                        return( <div className="subname"> <a href={props.name+"/PPT/Lecture-"+data+".pdf"} target="_blank" >Lecture-{data}</a></div>
                    
                       )
                    }
                    )}

                </div>
               
            </div>
        )
    
}

export default Subject;