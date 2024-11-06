import Card from './Card.js'
import RecipeImg from './RecipeImg.js'
import RecipeInfo from './RecipeInfo.js'
import IngredientsList from './IngredientsList.js'
//import RECIPE_IMG from '../../assets/pancake.png'
import {RECIPE} from './recipe-data.js'
//{} for const

export default function RecipeCard(){
    return(
        <Card>
            {/*Recipe IMG*/}
            <div>
                {/* <img src = {RECIPE.imgSrc} alt = "pancake"/> */}
                <RecipeImg imgSrc={RECIPE.imgSrc} altText={RECIPE.title}/>
            </div>
            <div>
                {/*Recipe Info*/}
                <RecipeInfo title = {RECIPE.title} description = {RECIPE.description}/>
            </div>
            <div>
                {/* Ingredients List*/}
                <IngredientsList ingredients = {RECIPE.ingredients} />
            </div>
            <div>
                {/* Instructions List*/}
                <div>
                    <h3>Instructions</h3>
                    <ol>
                    {RECIPE.instructions.map((instructions, index) => {
                        return<li key = {index}>{instructions}</li>
                    })}
                    </ol>
                </div>
            </div>
        </Card>
    )
}