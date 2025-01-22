// `src/components/BurgerStack.jsx`
const BurgerStack = ({stack}) => {
    return (
        <ul>
            {stack.map((burger, index) => (
                <li key={index} style={{backgroundColor: burger.color}}>
                    {burger.name}
                <button>x</button>
                </li>
            ))}
        </ul>
    );
  };
  
  export default BurgerStack;
  