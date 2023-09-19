import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetRecipe } from "../Redux/RecipeReducer/action";
import { RecipeCard } from "./RecipeCard";
import { useSearchParams } from "react-router-dom";

export const RecipeList = () => {
  const [searchParams] = useSearchParams();
  let dispatch = useDispatch();
  let data = useSelector((data) => data.recipeReducer.recipe);
  console.log(data);

  let obj = {
    params: {
      category: searchParams.getAll("category"),
      type: searchParams.getAll("type"),
      _sort: "price",
      _order: searchParams.get("sort"),
    },
  };

  useEffect(() => {
    dispatch(GetRecipe(obj));
  }, [searchParams]);

 

  return (
    <div>
      <div
        data-testid="recipe-list"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto",
          gap: "10px",
        }}
      >
        {data.map((el) => (
          <RecipeCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};
