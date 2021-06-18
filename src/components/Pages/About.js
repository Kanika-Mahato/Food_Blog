import React from 'react'
import './About.css'
import profile from '../images/aboutimg.jpg'
 function About() {
    return (
        <>
        <div class=" aboutUs">
            <h1>About Us</h1>
            <img class="img-fluid mx-auto" src={profile} alt=""></img>
            <h3>Aarohi</h3>
            <h5>Count memories, not calories.</h5>
            <h6>Thanks for visiting us!  </h6>
            <div class="container" id="text">
              <p>We think you'll love spending time with us.

                With Food Hero, you will be able to budget for, plan, and create countless healthy, super tasty meals. 
             Food Hero will become your family's 'go to' site for everything food.  Within Food Hero lives healthy and tast
             recipes, meal ideas, budgeting, shopping, and many more cooking tips and tools, plus ways to connect with other Food Heroes. </p>
              <p>
              FoodHero.org is divided into two main sections: Recipes and Ingredients. You can also read Food Hero Monthly 
               or connect with other Food Heroes by commenting on recipes or following on social media (Facebook, Instagram, Pinterest, Twitter or YouTube).

              Food Hero is available 24 hours a day, 7 days a week in English and Spanish. Plus you may find Food Hero 
             in communities around Oregon - keep an eye out for the Food Hero logo! 
              </p>
              <h3>How can I become a Food Hero?</h3>
                 <p>You can become a Food Hero by registering on the website. Simply click "Register" on the far right hand 
    side of any page of the website and follow the prompts.
</p>
              <h3>What do I get if I register for Food Hero?</h3>
                <p> When you register, you can do the following:</p>
               <ul className="list">
                 <li>
                save your favorite recipes</li>
             <li>post comments about recipes</li>
                   <li>send recipes to your mobile phone via a text (your phone carrier's standard message and data rates may apply)</li>
              < li>sign up to receive updates via email</li>
            <li>suggest tips</li>
            </ul>
<p>We do not share any of your information with anyone else.</p>

<p>We ask for your email address only to send you  information you request.  You can opt out at anytime. 
We ask for your phone number only if you choose to text something to yourself. 
We ask if you receive SNAP benefits because part of our funding is from this program.
  It helps to be able to show that SNAP participants are using the website.  
  Information on SNAP participants will only be shared as grouped data (aggregate) without any identifiable names attached. 
Where do Food Hero recipes come from?
Recipes that make it to Food Hero have had a long journey getting there.  Most of the recipes have been used by our
 nutrition educators in the field and then submitted to the Food Hero team to be considered for the website.  
 Recipes have the criteria found at this link: https://foodhero.org/recipe-criteria. 
</p>
<p>
 All recipes go through testing.  In addition to being tested for overall flavor, color, 
and texture we look for recipes that have low-cost and easy to find ingredients, easy to follow instructions,
 and a reasonable preparation time.  Each recipe is tasted and rated by several people.  After being tested a recipe 
 either passes through this step as it was submitted, is revised and then retested, or once in a while is deemed unusable for Food Hero.</p>
<p>
Once a recipe makes it through testing we use a computer program to create a nutrition facts label and check that the
 recipe in its final form meets our nutrition program criteria.  Serving sizes for nutrition analysis are based on FDA serving sizes.</p>
<p>
Once a recipe is posted on FoodHero.org we monitor user comments and comments from our 100+ educators who use the
 recipe in the field.  We edit recipes often based on comments.  Such as adding in great ideas educators have for ingredient substitutions.  

Click here to find out more about how our recipes are developed.
</p>
<h3>How can I find or sort recipes?</h3>
<p>
One of the features in the top right-hand corner of the recipe section is the ability to sort or 
group recipes to make it easier to find what you are looking for.  The Tips & Tools section of Food Hero can also be sorted.
</p>
<h3>What is our mission?</h3>
<p>
Food Hero’s mission is to help low-income Oregonians improve their health by increasing their consumption of fruits and vegetables.
  Food Hero is a multi-channel social marketing campaign which aims to meet our goals through work at the direct education level as well
   as work at the policy, systems and environment levels.



</p>

</div>

        </div>
        </>
    )
}
export default About;