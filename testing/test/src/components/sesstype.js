import React from "react";
import "./sesstype.css";
import { useParams } from "react-router-dom";

//class Subject extends React.Component{
    const Sesstype = (props)=>{
    const num=["I","II","III"];
    console.log(num);

    const {year}=useParams();

        return(
            <div className="sess">
                <h1> Welcome to all in {props.name} class!</h1>
                <p>Sessional Papers ({year})</p>
                <div className="type">
                    
                    {num.map((data)=>{
                        
                        return( <div className="subname"> <a href={"/"+props.name+"/sessional/"+year+"/"+data+".docx"} target="_blank" >{data} sessional paper</a></div>
                    
                       )
                    }
                    )}

                </div>
                
               
            </div>
        )
    
}

export default Sesstype;