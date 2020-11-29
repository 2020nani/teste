import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MarcaVeiculos  from './Components/MarcaVeiculos';

//importando estilos para pagina
import { Container, Text } from './styledapp';


export default function App() {
  return (
    <Container>
       <Header></Header>
       <div>
         <Text>Veiculos</Text>
        
         <MarcaVeiculos></MarcaVeiculos>
         
       </div>
       <Footer></Footer>
    </Container>
   
  );
}


