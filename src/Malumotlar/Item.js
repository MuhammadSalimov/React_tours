import React, { useState } from "react";
import "./Item.css"

const Item=(props)=>{
    const [state,setState]=useState(false)
    const text=state?props.info:`${props.info.substring(0,200)}...`
    const DeleteItem=(e)=>{
    
        props.REMOVdata(props.id)
    }
    return <article key={props.name} >
                        <div className="single-tour">
                           <img src={props.image} alt={props.name} />
                        </div>
                        <footer>
                            <div className="tour-info">
                                <h4>{props.name}</h4>
                                <h4 className="tour-price">{props.price}$</h4>
                            </div>
                            <p>{text} <button onClick={()=>setState(!state)}> {state?"Show Less":"Read more"}</button> </p>
                            <button onClick={DeleteItem} className="delete-btn">not interested </button>
                        </footer>
                    </article>
        
}

export default Item


