import React from "react";
import producto from './item'
const CardList = () => {
  
    return (
      <ul>
        {bebida.map(u =>
          <li key={u.id}>{u.name}: {u.precio}</li>)}
      </ul>
      
    );
  };
  
  export default CardList;