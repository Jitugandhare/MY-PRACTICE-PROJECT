import React from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react";
import { GetRecipe } from "../Redux/RecipeReducer/action";
export const RecipeDetail = () => {
  const [data, setData] = useState({})
  const { id } = useParams()
  const dispatch=useDispatch()

  const { recipe } = useSelector(state => state.recipeReucer)
  
  useEffect(() => {
    if (recipe.length == 0) {
    dispatch(GetRecipe());
  }
},[])

  useEffect(() => {
    const fdata=recipe?.find(el=>+el.id===+id)
      setData(fdata)
  })

  return (
    <div className={"recipe-card"}>
      {/* **Display the id of the item in h1 tag with class `recipe-id`** */}
      {/* Display all recipe details here */}
      <h1>{data?.id}</h1>
      <img
        src={data?.image}
        alt=""
        className="recipe-image"
        height={"200px"}
        width={"200px"}
      />
      <h5 className="recipe-name">{data?.name}</h5>

      <h4 className="recipe-type">Type:{data?.type}</h4>
      <p className="recipe-category">Category:{data?.category}</p>
      <h3 className="recipe-price">{data?.price}$</h3>
      <h4 className="recipe-ingredient">Ingredient:-</h4>

      {data?.ingredients?.map((el, i) => {
        return <p key={i}>-{ el}-</p>
      })}




    </div>
  );
};
