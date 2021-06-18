import React from 'react'
import './Home.css'

import RecipeItem from "./RecepieItems";

function Home(props) {
  const { recepies } = props;
  console.log(recepies)
  return (
    <>
    <div className="conatiner-fluid about">
            <div class="aboutBanner">
                <h1 className="display-1">Foodie</h1>
                <h3>For The Love Of Food.</h3>

            </div>
            
        </div>
      <div class="container">
        <div class="jumbotron jumbotron-fluid" id="content">
          <div class="container">
            <h1 class="display-4">Food and Nutrition</h1>
            <p class="lead">Food and nutrition are the way that we get fuel, providing energy for our bodies. We need to replace 
            nutrients in our bodies with a new supply every day. Water is an important component of nutrition.
             Fats, proteins, and carbohydrates are all required. Maintaining key vitamins and minerals are also important to maintaining good
              health. For pregnant women and adults over 50, vitamins such as vitamin D and minerals such as calcium and iron are 
              important to consider when choosing foods to eat, as well as possible dietary supplements.</p>

                       <p>A healthy diet includes a lot of natural foods. A sizeable portion of a healthy diet should consist of
                         fruits and vegetables, especially ones that are red, orange, or dark green. Whole grains, such as whole wheat 
                         and brown rice, should also play a part in your diet. For adults, dairy products should be non-fat or low-fat.
                          Protein can consist of lean meat and poultry, seafood, eggs, beans, legumes, and soy products such as tofu, 
                          as well as unsalted seeds and nuts.</p>
          </div>
        </div>

      </div>
      <div class="row foods">
        <div class="col">
          {recepies.map(recipe => (
            <RecipeItem
              key={Math.random() * 100}
              name={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredientLines={recipe.recipe.ingredientLines}

            />
          ))}
        </div>
      </div>


    </>

  );
}
export default Home;