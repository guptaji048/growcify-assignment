import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch('https://api.growcify.com/dev/category/list')
      .then(response => response.json())
      .then(data => console.log(data));

  }, [])
  return (
    <div>
      <h1>App component</h1>
    </div>
  );
}
