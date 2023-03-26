import React , {useState} from "react";
import './Element.css'

const Element = () =>{
    const [Title ,setTitle]=useState(0)
    const Decrement=()=>{
        setTitle(Title+1)
    }
    const Increment=()=>{
        setTitle(Title-1)
        
    }
    const Resetclick=()=>{
        setTitle(0)
        
    }
 return(
    <div className="Container">
        <div className="Fullwidth">{Title}</div>
        <div className="dec" onClick={Decrement}>+</div>
        <div className="inc" onClick={Increment}>-</div>
        <div className="reset" onClick={Resetclick}>Reset</div>
    </div>
    
 )   
}

export default Element