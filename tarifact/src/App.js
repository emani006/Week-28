import React from 'react';
import tariflist from './components/Tariflist';
import Tarifs from './components/Tarifs';
import "./styles/mainStyle.css";

function App() {
  const tCard = tariflist.map((tarif) => <Tarifs key={tarif.name} 
  name={tarif.name} speed={tarif.speed} price={tarif.price} color={tarif.color} isActive={tarif.isActive}></Tarifs>)

  return (
    <div className='scssClass main'>
      {tCard}
    </div>
  );
}

export default App;
