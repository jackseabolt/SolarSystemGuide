import React from 'react'; 
import './Planet.css'; 


export default function Planet(props){
    return (
        <div className="planet-article">
            <img src={props.thumbnail} className="planet-image" alt="Planet Image" />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p><strong>Composition:</strong><i> {props.composition}</i></p>
        </div>
    )
}