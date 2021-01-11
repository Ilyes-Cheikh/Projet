import './App.css';
import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Buttons from './Components/Buttons';
import Buttons2 from './Components/Buttons2';
import Commencer from './Components/Commencer';
function App() {
  const [enable,setEnable]=useState(false)
  const [compteur,setCompteur]=useState(0)
  const [tous,settous]=useState([])
  const Name=["Gianluigi Buffon","Cristiano Ronaldo","Leonardo Bonucci","Paulo Dybala","Juan Cuadrado","Rodrigo Bentancur","Alvaro Morata"]
  return (
    <div style={{backgroundColor:'black',height:'800PX',width:'100%'}} >

     {Name[compteur] ? <Commencer compteur={compteur} Name={Name} enable={enable} handleClick={()=>setEnable(true)} ></Commencer> :null}

     {Name[compteur] ? <Buttons enable={enable} incrementer={()=>setCompteur(compteur+1)}></Buttons>  :null}
      <Buttons2>  </Buttons2>
    </div>
  );
}

export default App;
