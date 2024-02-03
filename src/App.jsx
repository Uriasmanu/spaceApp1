import { styled } from "styled-components"

import EstilosGlobais from "./componentes/estilosGlobais"
import Cabecalho from "./componentes/header"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import bannerBackground from './assets/assets/banner.png'


function App() {


  return (
    <FundoGradient>
      <EstilosGlobais />
      <Cabecalho/>
      <BarraLateral/>
      <Banner
        texto="A galeria mais completa de fotos do espaço!"
        backgroundImage={bannerBackground}
      />
    </FundoGradient>
  )
}

const FundoGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

export default App
