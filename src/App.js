import React from "react";
import Logo from './Logo';
import BestPokemon from './BestPokemon'
import CaughtPokemon from './CaughtPokemon'
import Footer from './Footer'



function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const newDate = new Date().toLocaleDateString()
  return (
    <div>
      
      <Logo  appName="Pokedex"/>
      <BestPokemon  abilities={abilities}/>
      <CaughtPokemon newDate={newDate}/>
      <Footer/>
      <Footer/>
      
    </div>
  );
}





export default App;
