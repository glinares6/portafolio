// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import { useState } from "react";
import { UseContext } from "./contexts/AuthContext";
import RouterYt from "./router/RouterYt";

function App() {
  const [hostServidor] = useState("https://test-docker-zt45.onrender.com");

  const urlPrimeraOpcion = "http://localhost:3000";
  const urlSegundaOpcion = "https://test-docker-zt45.onrender.com";

  const urlFinal =
    hostServidor === urlPrimeraOpcion ? urlPrimeraOpcion : urlSegundaOpcion;
  return (
    <UseContext.Provider value={{ urlFinal }}>
      <RouterYt />
    </UseContext.Provider>
  );
}

export default App;

// <div>
// <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
//   <img src={viteLogo} className="logo" alt="Vite logo" />
// </a>
// <a href="https://react.dev" target="_blank" rel="noreferrer">
//   <img src={reactLogo} className="logo react" alt="React logo" />
// </a>
// </div>
// <h1>Vite + React</h1>
// <div className="card">
// <button onClick={() => setCount((count) => count + 1)}>
//   count is {count}
// </button>
// <p>
//   Edit <code>src/App.jsx</code> and save to test HMR
// </p>
// </div>
// <p className="read-the-docs">
// Click on the Vite and React logos to learn more
// </p>
