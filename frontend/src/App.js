import React, { useState } from "react";
import BancoDetail from "./BancoDetail";
import BancoList from "./BancoList";

function App() {
  const [view, setView] = useState(null);

  const handleListClick = () => {
    setView("list");
  };

  const handleDetailClick = () => {
    setView("detail");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button style={{ marginRight: "10px" }} onClick={handleListClick}>
        Ver lista de bancos
      </button>
      <button onClick={handleDetailClick}>Buscar detalhes do banco</button>
      {view === "list" && <BancoList />}
      {view === "detail" && <BancoDetail />}
    </div>
  );
}

export default App;
