import { Link } from "react-router-dom";


export const RecipeCard = ({id,category,image,name,price,type}) => {
  return (
    <div className={"recipe-card"}>
        <img className="recipe-image" style={{width:'100%'}} src={image} alt="img" />
        <h3 className="recipe-name">{name}</h3>
        <p className="recipe-category">{category}</p>
        <p className="recipe-type" style={{color:type==='veg'?'green':'red'}}>Type: {type}</p>
        <p className="recipe-price">{price}</p>
        <button>
        <Link to={`/recipe/${id}`}>View Ingredinets</Link>
        </button>
        
    </div>
  );
};
