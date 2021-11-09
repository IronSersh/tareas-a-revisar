import React from "react";
import producto from './item'
import cont from '../counter/itemCount'
const ThemeContext = React.createContext()
const CardList = () => {
  function onClick(evento){
    suma = cont.precio 
  }
  function valor(Valores){
    return <p valores ={Valores}></p>
  }
    return (
      
      <>
      <ul>
        {bebida.map(u =>
          <li key={u.id}>{u.name}: {u.precio}</li>)}
      </ul>
      <div>
        <p>suma: {suma}</p>
        <p>precio final: {valor}</p>
      </div>
      </>
    );
  };
  
  export default CardList;