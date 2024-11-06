export default function IngredientsList(props){
    const{ingredients} = props

    return(
        <div>
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                <li>{ingredient}</li>
                ))}
                
                </ul>
        </div>
    )
}