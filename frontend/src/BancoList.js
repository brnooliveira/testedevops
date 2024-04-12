import React, { useEffect, useState } from "react";

const BancoList = () => {
  const [bancos, setBancos] = useState([]);

  const fetchBancos = async () => {
    const url = `http://localhost:8000/api/bancos/`;
    const response = await fetch(url);
    const data = await response.json();
    setBancos(data);
  };

  useEffect(() => {
    fetchBancos();
  }, []);

  const renderedBancos = bancos.map((banco) => {
    return (
      <li
        key={banco.id}
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
      </li>
    );
  });

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>{renderedBancos}</ul>
  );
};

export default BancoList;
