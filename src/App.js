import "./index.css";
import React from "react";
import Nav from "./components/Nav";

function App() {
  // const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="container">
      <div className="max-w-xl mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <Nav />
      </div>
    </div>
  );
}

export default App;
