import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getRecipe } from "../Redux/RecipeReducer/action";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const { isLoading, isError, recipe } = useSelector(
    (store) => store.recipeReducer
  );

  useEffect(() => {
    if (location || recipe.length === 0) {
      const sortBy = searchParams.get("order");
      const paramObj = {
        params: {
          category: searchParams.getAll("category"),
          type: searchParams.getAll("type"),
          _sort: sortBy && "price",
          _order: sortBy && sortBy,
        },
      };
      dispatch(getRecipe(paramObj));
    }
  }, [location.key]);

  return (
    <div>
      <div data-testid="recipe-list">
        {/* Map through the recipe using the recipe card here */}
        {
          recipe.length > 0 && recipe.map((el) => {
            return <RecipeCard key={el.id} {...el}  />
          })
        }
      </div>
    </div>
  );
};
