/* esttilos para pagina App.js */
import styled from 'styled-components';
export const Container = styled.div `
width:100vw;
background-color: #F7F8FB;

`
export const Text = styled.h1` 
margin-left: 2vw;

/*
    centraliza o titulo dispositivo for celular
*/

@media(max-width: 360px) {
  margin-left: 35vw
}

`

