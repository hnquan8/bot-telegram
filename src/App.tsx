import { useEffect, useState } from "react";
import "./App.css";

import logo from "./logo.svg";

const tele = (window as any).Telegram.WebApp;

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    tele.ready();
  }, []);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
