/*
    Dados da pagina
   * Nome : Navita
   * Objetivo: Buscar modelos de veiculos da marca escolhida
   * Desenvolvedor: Hernani Almeida
   * data criacao: 29/11/2020
   
*/

import styled from 'styled-components';
export const Container = styled.div `
width:100vw;
display : flex;
background-color:#FFFFFF ;
h1{
color :lightgreen ;
margin-left: 2vw

}

/*
    ajustando cabecalho da pagina para centralizar e ficar responsavel
*/

@media(max-width: 360px) {
  display: flex;
  align-items: center;
  justify-content: center
}
`