import { useState } from "react";

export default function Main(){
  const [contador,setContador]= useState(0);
    return (
     <main>
        <p>Cliques : {contador}</p>
        <button onClick={ ()=> setContador(contador + 1)}>Incrementrar</button>
     </main>
    );
}