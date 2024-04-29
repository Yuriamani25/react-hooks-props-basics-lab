import React from "react";

function Home({name, color, city}) {
  return (
    <div id="home">
      <h2>test</h2>
      <h1 style={{ color:color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
