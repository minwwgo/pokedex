import React from 'react'
function BestPokemon(props) {
  const {abilities} =props
  
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((abilitie,index) => {
          return <li key={index}>{abilitie}</li>;
        })}
      </ul>
    </div>
  );
}
export default BestPokemon;