import React from "react";
import producto from './item'
import cont from '../counter/itemCount'
const CardList = () => {
  function onClick(evento){
    suma = cont.precio 
  }
    return (
      
      <>
      <ul>
        {bebida.map(u =>
          <li key={u.id}>{u.name}: {u.precio}</li>)}
      </ul>
      <div>
        <p>suma: {suma}</p>
      </div>
      </>
    );
  };
  
  export default CardList;