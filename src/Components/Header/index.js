/*
    Dados da pagina
   * Nome : Navita
   * Objetivo: Buscar modelos de veiculos da marca escolhida
   * Desenvolvedor: Hernani Almeida
   * data criacao: 29/11/2020
   
*/

import React from "react";

//importando estilos da pagina adicionado em styled.js
import {Container} from './styled'

/*
    funcao que retorna o header da pagina
*/
export default function Header(){
    return(
    <Container>
        <h1>Navita</h1>
    </Container>
    )
}