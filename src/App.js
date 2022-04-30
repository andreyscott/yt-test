import './App.css';

function App() {
  const letter = [
    'a', 'b', 'c', 'd', 'e', 'f'
  ]
  const dif = () => {
    return letter.map((l, i) => {
      return <div key={i}>{l}</div>
    }
    )
  }
  return (
    <main className="App">
      {dif()}
   
    </main>
  );
}

export default App;
