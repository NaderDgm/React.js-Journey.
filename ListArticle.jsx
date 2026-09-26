import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_article } from "./actions";

export default function ListArticle() {
const articles= useSelector((State)=>State.articles);
const dispatch=useDispatch();
     return(
      <div>
        <h2>listes des articles</h2>
        <ul>
          {articles.map((a)=>(
            <li key={a.id}>
              {a.designation} - {a.famille}
              <button onClick={()=>dispatch(delete_article(a.id))}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
     )
}


