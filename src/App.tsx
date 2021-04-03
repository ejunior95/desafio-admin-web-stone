import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const url =
    process.env.NODE_ENV === "production"
      ? "/api"
      : "http://localhost:3001/api";

  useEffect(() => {
    fetch(`${url}/users`)
      .then(function (response) {
        return response.json();
      })
      .then(setUsers);
  }, [url]);

  return (
    <div className="App">
        <h1>teste</h1>
        {/* <p>{JSON.stringify(users)}</p> */}
    </div>
  );
}

export default App;
