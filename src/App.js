import Hero from "./components/Hero";

import "./App.css";

function App() {
  const myName = "Mido";
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        {myName ? <p>Welcome Back.</p> : <button>Login</button>}
        <p>Hello {myName || "guest"}.</p>
      </header>
    </div>
  );
}

export default App;
