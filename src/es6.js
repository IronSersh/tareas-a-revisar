import React from "react";
import NavBar from "./components/NavBar";
import Item from "./components/ItemListContainer/ItemListContainer"
function App() {
    return <>
             // Desarrolla tu implementación de un navbar dentro del componente NavBar.js
             <div className="barra"> 
                <NavBar />
             </div>
            <div className="user">
               <Item />
            </div>
     </>;
}

export default App;