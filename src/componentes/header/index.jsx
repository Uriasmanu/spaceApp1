import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

import logo from '../../assets/logo.png'

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Cabecalho = () => {
    return (<HeaderEstilizado>
        <img src={logo} alt="" />
        <CampoTexto />
    </HeaderEstilizado>)
}

export default Cabecalho