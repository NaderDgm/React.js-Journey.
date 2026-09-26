import React from "react";
import { useState } from "react";
export function Recherche(){
    const [rech, setRech]=useState("");
    const Chercher=()=>{
        this.state.filter((categorie)=>{
            if(categorie.categorie==rech){
                return( <ul>
                    {categorie.map((p)=>(
                    <li key={p.id}>
                    {p.title} - {p.price}- {p.description}
                    </li>))}
                    
                    </ul>);
            }
        })
    }
    return(
        <>
        <h1>Recherche par Categorie</h1>
        <input type="text" value={rech} onChange={(e)=>setRech(e.target.value)} />
        <button onClick={Chercher}>Chercher</button>
        </>
    );
    
}