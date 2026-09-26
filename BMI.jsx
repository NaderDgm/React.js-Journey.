import react , {useState } from "react" ;
export default function BMI(){
    const [poids, setPoids]=useState(0);
    const [taille, setTaille]=useState(0);
    const[bmi, setBmi]=useState(null);
    const[status, setStatus]=useState("");
    const[color, setColor]=useState("");
    const calculeBMI=()=>{
        const p=Number(poids);
        const t=Number(taille);
        if(p > 0 && t > 0){
            const bmi=p*10000/t**2;
            setBmi(bmi.toFixed(2));
        }else{
            setBmi(null);
        }
        let status="";
        let color="";
        if(bmi>=19 && bmi<=25){
            status="Normal";
            color="green";
        }else if(bmi<19){
            status="sous poids";
            color="orange";
        }else if(bmi>25){
            status="surpoids";
            color="red";
        }
        setStatus(status);
        setColor(color);
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        
    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <h1>Body mass index</h1>
                <label>Poids en Kg</label>
                <input type="number" value={poids} onChange={(e) => setPoids(e.target.value)} /><br/>
                <label>Taille en cm</label>
                <input type="number" value={taille} onChange={(e) => setTaille(e.target.value)} /><br/>
                <button type="submit" onClick={calculeBMI}>Calculer</button>
                {bmi && (
                                   <div>
                                       <h2 style={{color: color}}>Votre BMI est : {bmi} {status}</h2>
                                   </div>
                ) }
            </form>
        </div>
    )

}        