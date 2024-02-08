import { styled } from "styled-components"

import EstilosGlobais from "./componentes/estilosGlobais"
import Cabecalho from "./componentes/header"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import bannerBackground from './assets/assets/banner.png'
import Galeria from "./componentes/galeria"
import { useState } from "react"

import foto from './fotos.json'
import ModalZoom from "./componentes/ModalZoom"



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

  const [fotoDaGaleria, setFotoDaGaleria] = useState(foto)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const aoAlternarFavorito = (foto) =>{
    if (foto.id === fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotoDaGaleria(fotoDaGaleria.map(fotoDaGaleria => {
      return{
        ...fotoDaGaleria,
        favorita:fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

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
            <Galeria 
            aoFotoSelecionada={foto => setFotoSelecionada(foto)}
            aoAlternarFavorito={aoAlternarFavorito}
            fotos={fotoDaGaleria} />
          </Conteudo>
        </Main>
      </AppContainer>
      <ModalZoom
      foto={fotoSelecionada}
      aoFechar={() => setFotoSelecionada(null)}
      aoAlternarFavorito={aoAlternarFavorito}
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
