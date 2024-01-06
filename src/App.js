import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
}

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    const newAnimal = getRandomAnimal();
    setAnimals([...animals, newAnimal]);
  };
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
