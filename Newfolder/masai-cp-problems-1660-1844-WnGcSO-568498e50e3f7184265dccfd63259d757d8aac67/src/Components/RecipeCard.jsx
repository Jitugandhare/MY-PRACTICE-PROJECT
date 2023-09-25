import { Link } from "react-router-dom";

export const RecipeCard = ({
  id,name,type,category,price,image
}) => {


 let css=type==="veg" ? "green":"red"

  return (
    <div className={"recipe-card"}>
      <img src={image} alt="" className="recipe-image" />
      <h5 className="recipe-name">{name}</h5>
      <h4 className="recipe-type" style={{ color: `${css}` }}>
        Type:{type}
      </h4>
      <h3 className="recipe-price">Price:{price}</h3>
      <Link to={`recipe/${id}`}>
        <button className="recipe-detail">View Ingredients</button>
      </Link>
      {/* Dispaly Recipe Details Here */}
    </div>
  );
};
