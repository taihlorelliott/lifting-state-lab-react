// src/components/IngredientList.jsx

const IngredientList = ({availableIngredients, stack, setStack}) => {
    
    const handleClick = (ingredients) => {
        setStack([ingredients, ...stack])
        console.log(stack)
    } 

    return (
        <ul>
            {availableIngredients.map((ingredients, index) => (
                <li key={index} style={{backgroundColor: ingredients.color}}>
                    {ingredients.name}
                <button onClick={() => handleClick(ingredients)}>+</button>
                </li>
            ))}
        </ul>);
  };
  
  export default IngredientList;
  