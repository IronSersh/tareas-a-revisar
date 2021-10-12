import React from "react";
import Contador from "./counter/itemCount"

class NavBar extends React.Component{
    render(){
        return(
            <div>
                <h1> ofertas de la semana</h1>
                <ol>
                    <li>carne 300</li>
                    <li>cerdo 200</li>
                    <li>pollo 100</li>
                </ol>
                <Contador />
            </div>
            
        )

    }
}

export default NavBar;
