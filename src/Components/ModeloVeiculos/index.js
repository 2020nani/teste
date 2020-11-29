/*
    Dados da pagina
   * Nome : Navita
   * Objetivo: Buscar modelos de veiculos da marca escolhida
   * Desenvolvedor: Hernani Almeida
   * data criacao: 29/11/2020
   
*/

import React, { useState, useEffect } from 'react';

//importando estilos para pagina
import { Container, HeaderTabela } from './styled'

//component que sera exportado
export default function ModeloVeiculos(props) {
    // declarando variavel contendo array modelos passado pela props.children em MarcaVeiculos/index.js
    let viewModelos = props.children[0]
    let modelo = props.children[1]

    return (

        <div>
            {viewModelos === true ?
                <Container>
                    <HeaderTabela>
                        <h1>Modelos</h1>
                    </HeaderTabela>

                    <table>
                        <th><p>Modelo</p></th>
                        {modelo.map(modelos => (
                            <tr>
                                <td>
                                    <p>{modelos.nome}</p>

                                </td>

                            </tr>
                        ))}

                    </table>

                </Container>
                : 
                <div></div>}
        </div>

    )
}