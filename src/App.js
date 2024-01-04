function App() {
  const handleClick = () => {
    console.log("Add Animal");
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}

export default App;
