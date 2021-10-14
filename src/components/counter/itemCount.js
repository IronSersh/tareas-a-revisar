import React from "react";

const contador = () =>{
    const[counter, setCounter] = React.useState(0)

    const creciente = () =>{
        setCounter(counter + 1)
    }
    const decreciente = () =>{
        setCounter(counter - 1)
    };

    return(
        <div className="App">
            <h1>Contador</h1>
            <h2>{counter}</h2>
            <button onClick={decreciente}>decrecer</button>
            <button onClick={creciente}>crecer</button>
        </div>
    )
}


export default contador