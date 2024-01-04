const Content = () => {
  const handleNameChange = () => {
    const names = ["ojo", "rickey", "malowa"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log('you clicked it')
  }
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }

  return (
    <main>
      <p> Hello {handleNameChange()}! </p>
      <button onClick={handleClick}>click it</button>
      <button onClick={() => handleClick2('ojo')}>click it</button>
    </main>
  );
};

export default Content;
