import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { add_article } from "./actions";
export default function AddArticle(){
    const [id,setId]=useState("");
    const [designation,setDesignation]=useState("");
    const [famille , setFamille]=useState("");
    const dispatch =useDispatch();
    const submit=(e)=>{
        e.preventDefault();
        dispatch(
            add_article({
                id: Number(id),
                designation,
                famille,
            })
        );
        setId("");
        setDesignation("");
        setFamille("");
    };
    return (
       <form onSubmit={submit}>
       <h2>Ajouter article</h2>

       <input placeholder="id" value={id} onChange={(e) => setId(e.target.value)} />

       <input
        placeholder="designation"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}/>
        
       <input placeholder="famille" value={famille} onChange={(e) => setFamille(e.target.value)} />

       <button type="submit">Add</button>
       </form>
    )
}