import { get } from 'axios';

//funcao busca dados na api e retorna array de veiculos
export function MarcasVeiculos ( ){

    return get( `https://parallelum.com.br/fipe/api/v1/carros/marcas` ).then( result => result.data )
}

/* funcao busca modelos de veiculo na api e retorna array dos
modelos de veiculos conforme id passado como parametro
na funcao */

export function ModelosVeiculos (id){
  
   return get( `https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos` ).then( result => result.data )

}

