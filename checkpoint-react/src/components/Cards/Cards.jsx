import React from "react";
import './Cards.css'

function Cards(props) {
    if (props.people) {
        return <div className="card">
        <div className="cards-transport">{props.transport}<span className="cards-people">{props.people} </span></div>
        <img className="cards-image" src={props.img}/>
        <p className="cards-info">{props.city}, {props.mouth} — {props.price}</p>
    </div>
    }
    
    return (
        <div className="card">
            <div className="cards-transport">{props.transport}</div>
            <img className="cards-image" src={props.img}/>
            <p className="cards-info">{props.city}, {props.mouth} — {props.price}</p>
        </div>
    )
}

export default Cards