import axios from "axios"
import { RECIPE_REQUEST_FAILURE, RECIPE_REQUEST_PENDING, RECIPE_REQUEST_SUCCESS } from "./actionTypes"

export const GetRecipe=(dispatch)=> {
    dispatch({type:RECIPE_REQUEST_PENDING})
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/recipe`)

    .then((data)=>{dispatch({type:RECIPE_REQUEST_SUCCESS,payload:data.data})})

    .catch((err)=>{ dispatch({action:RECIPE_REQUEST_FAILURE}) })
}