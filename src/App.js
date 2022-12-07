import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import ProtectedRouter from "./router/protected";

function App() {
  return (
    <div>
      <NavBar />
      {/* {isLoggedIn ? <ProtectedRouter /> : <PublicRouter />} */}
      <ProtectedRouter />
    </div>
  );
}

export default App;
