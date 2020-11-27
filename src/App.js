import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MarcaVeiculos  from './Components/MarcaVeiculos';

export default function App() {
  return (
    <div>
       <Header></Header>
       <div>
         <h1>Veiculos</h1>
        
         <MarcaVeiculos></MarcaVeiculos>
       </div>
       <Footer></Footer>
    </div>
   
  );
}


