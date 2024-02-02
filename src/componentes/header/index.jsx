import { styled } from "styled-components"
import logo from '../../assets/logo.png'
import CampoTexto from "../campoTexto"

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src={logo} />
            <CampoTexto/>
        </HeaderEstilizado>
    )
}

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;

    img{
        max-width: 212px;
    }
`

export default Cabecalho