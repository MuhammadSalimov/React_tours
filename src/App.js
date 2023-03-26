import React , {useState} from "react";
import Obyektiv from "./Malumotlar/Obyektiv"
import Item from "./Malumotlar/Item";
import Refresh from "./Malumotlar/Refresh";
// import Element from './Elementlar/Element';
// import './Elementlar/ElementApp.css'
// import './App.css';


function App() {
  const [title, setTitle]= useState(Obyektiv)
  const Delete=(deldata)=>{
    const newTitle=title.filter((item)=>deldata !==item.id)
    
    setTitle(newTitle)
  }

  const Refreshdata=()=>{
      setTitle(Obyektiv)
  }
  return (
    <div>
      <main>
      <section>
                    <div className="title">
                    <h2>our tours</h2>
                    <div className="underline"></div>
                    </div>
                   {title.length===0?<Refresh Yuklash={Refreshdata} />:''}
                    {
                     
          title.map((elem)=>{
          return (
          
            <Item REMOVdata={Delete} id={elem.id} name={elem.name}  info={elem.info} image={elem.image} price={elem.price} />
           )
          })
      }
      </section> 
        
     
      </main>

    </div>
    // <div className="App">

    //   {/* <Element /> */}
    // </div>
  );
}

export default App;
