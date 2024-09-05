export default function RecipeImg(props){
    //using destructuring to pull out our imgSrc prop
    const{imgSrc, altText} = props
    return <img src = {props.imgSrc} alt = "pancake"/>
}

// props = {
//     children: Some JSX Element,
//     imgSrc: requestAnimationFrame(...),
//     alt: "some text"

// }