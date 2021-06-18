import React from "react";
import './Home.css'

const RecipeItem = props => {
  const { name, image,ingredientLines} = props;
  return (
    <div class="container">
      <div class="jumbotron py-2 text-center mx-auto " id="items">
        <img src={image} className="img-fluid p-5px mx-auto " alt=""/>
        <div class="container">
          <h5>{name}</h5>
          {ingredientLines.map(ingredient => (
            <p>{ingredient}</p>
          ))}
        </div>
      </div>
      </div>
  );
};

export default RecipeItem;