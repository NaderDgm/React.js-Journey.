import react , {useState} from "react";
export default function Stagiaires(){

    const [stagiaires,setStagiaires]=useState([...]);
    const [id,setId]=useState(""); const [matricule,setMatricule]=useState("");
    const [nom,setNom]=useState(""); const [ville,setVille]=useState("");
    const [codepostal,setCodepostal]=useState(""); const [moyenne,setMoyenne]=useState("");
    const [stagiaires2,setStagiaires2]=useState([]);

    const Ajouter=()=>{
          if(!matricule||!nom||!ville||!codepostal||moyenne==="") return;
          if(+moyenne<0||+moyenne>20) return;
          if(stagiaires.some(s=>s.matricule===matricule)) return;
          const newS={id:Date.now(),matricule,nom,codepostal,ville,moyenne:+moyenne};
          setStagiaires([...stagiaires,newS]);
        };
    const Supprimer=(id)=>setStagiaires(stagiaires.filter(s=>s.id!==id));
    
    }