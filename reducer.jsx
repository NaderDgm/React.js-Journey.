import {ADD_ARTICLE,DELETE_ARTICLE} from "./actions"

const initState = {
    articles: [
      { id: 10, designation: "article1", famille: "informatique" },
      { id: 11, designation: "article2", famille: "bureau" },
    ],
  };
export default function reducer(state = initState , action){
    switch(action.type){
        case "ADD_ARTICLE":
        return {
            ...state,
            articles: [...state.articles , action.payload],
        };
        case "DELETE_ARTICLE":
        return {
            ...state,
            articles:state.articles.filter(a=>a.id!==action.payload.id),
        };
        default:
            return state;
    }
}
