import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero"
import HeadLineCards from "./components/HeadLineCards";
import Food from "./components/food"

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadLineCards />
      <Food/>
    </div>
  );
}

export default App;
