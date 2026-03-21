import react , {useState} from "react";
export default function CalculBmi(){
    const[poids,setPoids]=useState("");
    const [taille,setTaille]=useState("");
    const [bmi,setBmi]=useState(null);
    const calcul=()=>{
        let p=Number(poids);
        let t=Number(taille);
        if(!p || !t)
            return ;
        const res=(p * 10000) / (t*t);
        setBmi(res);
    };
    let statut = "";
    let color = "";
    if(bmi!==null){
        if(bmi < 19){
            statut = "Sous poids"; 
            color = "red";
        }
        else if(bmi >25){
            statut = "Surpoids"; 
            color = "orange";
        }
        else{
            statut = "Normal"; 
            color = "green";
        }

    }
    return(
        <div>
            <h3>Body mass index</h3>
            <input type="number" placeholder="poids" onChange={(e)=>setPoids(e.target.value)} /> <br/>
            <input type="number" placeholder="taille" onChange={(e)=>setTaille(e.target.value)} /> <br/>
            <button onClick={calcul}>Calculate</button>
            <br/>
            
                <p>BMI : {bmi} {""}
                <span style={{color , fontweight:"bold"}}>{statut}</span>
                </p>
            
        </div>
    )
}