import React, { useEffect, useState } from "react";

const BancoDetail = () => {
  const [banco, setBanco] = useState(null);
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState(null);

  const fetchBanco = async () => {
    const url = `http://localhost:8000/api/bancos/?codigo=${codigo}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.length === 0) {
      setError("Não existe banco com o código fornecido.");
      setBanco(null);
    } else {
      setBanco(data[0]);
      setError(null);
    }
  };

  useEffect(() => {
    if (codigo) {
      fetchBanco();
    }
  }, [codigo]);

  const handleInputChange = (event) => {
    setCodigo(event.target.value);
  };

  const handleSearchClick = () => {
    fetchBanco();
  };

  return (
    <div>
      <input type="text" value={codigo} onChange={handleInputChange} />
      <button onClick={handleSearchClick}>Buscar</button>
      {error && <div>{error}</div>}
      {banco && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px 0",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ marginRight: "10px" }}>{banco.codigo} -</span>
            <span>{banco.nome}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BancoDetail;
