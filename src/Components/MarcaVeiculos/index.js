import React, { useState, useEffect } from 'react';

//importando funcao do servico para requisitar dados da api
import {MarcasVeiculos} from '../../Services/api'

//component que sera exportado
export default function MarcaVeiculos(){

    const [veiculos, setVeiculos] = useState( [] )

useEffect(() => {
    //funcao que faz requisicao na api e retorna um array das marcas dos veiculos 
    async function Veiculos() {

        const response = await MarcasVeiculos().then(result => result)
        setVeiculos(response)

    }
    Veiculos()
}, [])

return (
 <div>
      <table>
           <th>Marcas
           {veiculos.map(marcas => (
             <tr>
             
             <td>
                 {marcas.nome}
                <button type="button" onClick={() => console.log('ok')}>Ver modelos</button>
               
                  </td>
            
           </tr>
           ))}
           
           </th>
         </table>
 </div>
)
}