import React, { useState, useEffect } from 'react';

//importando funcao do servico para requisitar dados da api
import { ModelosVeiculos } from '../../Services/api'

//importando estilos para pagina
import { Container, HeaderTabela } from './styled'

//component que sera exportado
export default function ModeloVeiculos( props ) {
    // declarando variavel contendo id passado pela props
    let id = props.children[0]
    let modelo = props.children[1]
    // declarando constantes
    

     //funcao que faz requisicao na api e retorna um array das marcas dos veiculos 
  

    /* funcoes utilizadas pelo componente 

    // funcao que recebe id escolhido e instancia no estado da constante veiculoid
    function idVeiculo(id) {

        setVeiculoid(id)
    
    }*/
    
    return (console.log(id, modelo),
  
     <div>
    {id === true ? 
    <Container>
    <HeaderTabela>
        <h1>Modelos</h1>
    </HeaderTabela>
    
    <table>
        <th><p>Modelo</p></th>
        {modelo.map(modelos =>(
            <tr>
                <td>
                    <p>{modelos.nome}</p>
                    
                </td>
                
            </tr>
        ))}
        
    </table>

    </Container>
    : <h1>hello</h1>}
  </div>
  
    )
}