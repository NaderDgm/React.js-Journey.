import { livres } from "./livre";
export default function LivreCard({ livre  , like, increment }) {
  return (
    <div className="card" >
      <img src={livre.poster} alt={livre.title}/>
      <h1>{livre.title}</h1>
      <p>{livre.Auteur}</p>
      <p>{livre.Edition}</p>
      <button onClick={increment}>Like{like}</button>
    </div>
  );
}