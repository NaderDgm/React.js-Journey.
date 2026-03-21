export const ADD_ARTICLE="ADD_ARTICLE";
export const DELETE_ARTICLE="DELETE_ARTICLE";

export const add_article=(article)=>({
type:"ADD_ARTICLE",
payload:article,
});
export const delete_article= (id) =>({
    type:"DELETE_ARTICLE",
    payload:{id},
});