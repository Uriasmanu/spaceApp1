import { styled } from "styled-components"
import ItemNavegacao from "./itemNavegacao"



const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

import homeAtivo from '../../assets/icones/home-ativo.png'
import homeInativo from '../../assets/icones/home-inativo.png'

import vistaAtivo from '../../assets/icones/mais-vistas-ativo.png'
import vistaInativo from '../../assets/icones/mais-vistas-inativo.png'

import curtidaAtivo from '../../assets/icones/mais-curtidas-ativo.png'
import curtidaInativo from '../../assets/icones/mais-curtidas-inativo.png'

import novasAtivo from '../../assets/icones/novas-ativo.png'
import novasInativo from '../../assets/icones/novas-inativo.png'

import surpreendaAtivo from '../../assets/icones/surpreenda-me-ativo.png'
import surpreendaInativo from '../../assets/icones/surpreenda-me-inativo.png'

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                        iconAtivo={homeAtivo}
                        iconInativo={homeInativo}
                        ativo={true}

                    >
                        Inicio
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconAtivo={vistaAtivo}
                        iconInativo={vistaInativo}
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconAtivo={curtidaAtivo}
                        iconInativo={curtidaInativo}
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconAtivo={novasAtivo}
                        iconInativo={novasInativo}
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconAtivo={surpreendaAtivo}
                        iconInativo={surpreendaInativo}
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral