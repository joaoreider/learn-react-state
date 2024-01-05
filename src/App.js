import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal</button>
      <div>Animals: {count}</div>
    </div>
  );
}

export default App;
