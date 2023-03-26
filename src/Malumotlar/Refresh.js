import React from "react";


const Refresh=(props)=>{
    const Refresh = ()=>{
            props.Yuklash(true)
    }
    return(
        <div >
            <button onClick={Refresh} className="btn">Refresh</button>
        </div>
    )
}

export default Refresh