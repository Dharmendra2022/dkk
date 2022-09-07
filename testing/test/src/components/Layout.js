import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";


const Layout = (props) =>{
    return(
        <div className="layout">
            <h1> Welcome to all in {props.name} class!</h1>
                <hr></hr>
            <div className="grid" >
                
                <Link to={"/"+props.name+"_ppt" }>PPT </Link>
                <Link to={"/"+props.name+"_notes" }>NOTES </Link>
                <Link to={"/"+props.name+"_assign" }>ASSIGNMENTS </Link>
                <Link to={"/"+props.name+"_aktu" }>AKTU QUESTION PAPERS </Link>
                <Link to={"/"+props.name+"_sess" }>SESSIONAL PAPERS </Link>
                <Link to={"/"+props.name+"_mcq" }>MCQ QUESTIONS </Link>
                
            </div>
        </div>
    )
}

export default Layout;