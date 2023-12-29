import { Link } from "react-router-dom";
import "../Card/Card.css"
import React from "react";


function Card(props){
    return(
        <div className="card">
        
        <img src={props.url} id="photo" alt="#"/>
        <p><Link className="link" to={props.path}>{props.title}</Link></p>
        </div>
    )
}

export default Card;