import React, { useState } from "react";

function SearchUI({ title }) {
  const [searchValue, setSearchVlaue] = useState("");

  return (
    <div className="">
      <input type="text" onChange={(e) => setSearchVlaue(e.target.value)} />
      <button> All</button>
      <button> mode</button>
    </div>
  );
}

export default SearchUI;
