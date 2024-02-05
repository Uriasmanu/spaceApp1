import { styled } from "styled-components"

import EstilosGlobais from "./componentes/estilosGlobais"
import Cabecalho from "./componentes/header"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import bannerBackground from './assets/assets/banner.png'
import Galeria from "./componentes/galeria"


const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const Main = styled.main`
  display: flex;
  gap: 24px;
`

const Conteudo = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  return (
    <FundoGradient>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <Main>
          <BarraLateral />
          <Conteudo>
          <Banner
            texto="A galeria mais completa de fotos do espaço!"
            backgroundImage={bannerBackground}
          />
          <Galeria/>
          </Conteudo>
        </Main>
      </AppContainer>
    </FundoGradient>
  )
}

const FundoGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

export default App
