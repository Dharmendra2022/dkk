import React from "react";
import "./aktuques.css";

//class Subject extends React.Component{
    const Aktuques = (props)=>{
    const num=[2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011];
    console.log(num);

    
        return(
            <div className="aktuques">
                <h1> Welcome to all in {props.name} class!</h1>
                <p>Download AKTU Examination Previous Year Question Papers</p>
                <div className="paper">
                    
                    {num.map((data)=>{
                        
                        return( <div className="subname"> <a href={props.name+"/aktu/"+data+".pdf"} target="_blank" >Year-{data}</a></div>
                    
                       )
                    }
                    )}

                </div>
                
               
            </div>
        )
    
}

export default Aktuques;