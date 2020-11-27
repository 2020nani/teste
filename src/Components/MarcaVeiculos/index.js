import React, { useState, useEffect } from 'react';

//importando funcao do servico para requisitar dados da api
import { MarcasVeiculos, ModelosVeiculos } from '../../Services/api';
import ModeloVeiculos from '../ModeloVeiculos'
//importando estilos para pagina
import { Container, HeaderTabela } from './styled'

//component que sera exportado
export default function MarcaVeiculos() {

    // array salvara veiculos retornado pela api
    const [veiculos, setVeiculos] = useState([]);
    // constantes guardara id e a marca
    const [veiculoid, setVeiculoid] = useState()
    const [modelo, setModelo] = useState([])
    const [veiculomarca, setVeiculoMarca] = useState()
    // constante booleana retornando true ou false para mostrar modelos do veiculo
    const [viewModelos, setViewModelos] = useState(false)

     //funcao que faz requisicao na api e retorna um array das marcas dos veiculos 
    useEffect(() => {
       
        async function Veiculos() {

            const response = await MarcasVeiculos().then(result => result)
            setVeiculos(response)

        }
        Veiculos()
    }, [])
    useEffect(() => {
       
        async function veiculoModelo() {

            const response = await ModelosVeiculos( veiculoid ).then(result => result)
            setModelo(response.modelos)

        }
        veiculoModelo()
    }, [veiculoid])

    /* funcoes utilizadas pelo componente */

    // funcao que recebe id escolhido e instancia no estado da constante veiculoid
    function idVeiculo(id, marca) {
        //condicional para mostrar ou nao o componente ModeloVeiculos
        {viewModelos === false ? setViewModelos(true) : setViewModelos(false)}
        //instanciando id no estado da constante veiculoid
        setVeiculoid(id)
         //instanciando marca no estado da constante veiculomarca
         setVeiculoMarca( marca )

    }
    
    return (
        <div>
        <Container>
            <HeaderTabela>
                <h1>Marcas</h1>
            </HeaderTabela>
            
            {viewModelos === false ?
            
            <table>
                <th><p>Marca</p></th>
           {veiculos.map(marcas => (
                    <tr>
                        <td>
                            <p>{marcas.nome}</p>
                            <button type="button"  onClick={() => idVeiculo(marcas.codigo, marcas.nome)}><p>Ver modelos</p></button>
                        </td>
                        
                    </tr>
                ))}
                
            </table>
            : 
            
               <table>
                <th><p>Marca</p></th>
                    <tr>
                        <td>
                            <p>{veiculomarca}</p>
                            <button type="button"  onClick={() => idVeiculo()}><p>Ver marcas</p></button>

                        </td>
                    </tr>
                
            </table> 
            }
            </Container>
        <ModeloVeiculos>{[viewModelos, modelo]}</ModeloVeiculos>
   
        </div>
    )
}

