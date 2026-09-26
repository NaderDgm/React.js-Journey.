import React, { useState } from "react";
import femme from './Pic/woman.png';
import homme from './Pic/man.png';
export default function PoidsIdeal(){
    const [taille,setTaille]=useState(0);
    const [genre,setGenre]=useState("");
    const [poidsideal,setPoidsIdeal]=useState(0);
    const [img,setImage]=useState(null);
    const handlesubmit=(e)=>{
        e.preventDefault();
    }
    const calculerPoidsIdeal=()=>{
        const t=Number(taille);
        const g=String(genre);
        if(t!==Number(taille)){
            setPoidsIdeal("Veuillez entrer une taille valide");
        }else if(g!=="Homme"  && g!=="Femme"){
            setPoidsIdeal("Veuillez sélectionner un genre valide");
        }else{
            if(g==="Homme"){
                const poids=(t-100)*0.9;
                setPoidsIdeal(`Le poids idéal pour un homme de ${t} cm est de ${poids} kg.`);
                setImage(homme); 
            }else if(g==="Femme"){
                const poids=(t-100)*0.85;
                setPoidsIdeal(`Le poids idéal pour une femme de ${t} cm est de ${poids} kg.`);
                setImage(femme);
            }
        }
    }
          return (
            <div style={{padding:'20px' , border:'1px solid black' , margin:'20px' , position:'relative' ,}}>
                <form onSubmit={handlesubmit}>
                    <label>Taille</label>
                    <input type="number" value={taille} onChange={(e)=>setTaille(e.target.value)} /><br/>
                    <label>Genre</label>
                    <input type="text" value={genre} onChange={(e)=>setGenre(e.target.value)} /> {img && <img src={img} alt="Image" width={'50px'} height={'40px'} />} <br/>
                    <button type="submit" onClick={calculerPoidsIdeal}>Calculer</button>
                    <p>{poidsideal}</p>
                </form>
            </div>
          )


}