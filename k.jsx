import { useState } from "react";
export default function K(){
    const [nom,setNom]=useState("");
    const [prix,setPrix]=useState(0);
    const [confirmer,setConfirmer]=useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault();}
        const Confirmer=()=>{
            let n=String(nom);
            let p=Number(prix);
            if(n==nom && p==prix){
                return(
                    <p>{nom} - {prix}</p>
                );
        }

            }
            return(
                <form onSubmit={handleSubmit}>
                    <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} placeholder="nom"/><br/>
                    <input type="number" value={prix} onChange={(e)=>setPrix(e.target.value)} placeholder="prix"/><br/>
                    <button onClick={Confirmer}>Confirmer</button>
                    {confirmer}
                </form>
            );
        }