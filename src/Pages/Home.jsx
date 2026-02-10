import React from 'react'
import Header from '../Components/Header'
import Hero from '../Seccions/Hero'
import Diferenciador from '../Seccions/Diferenciador'
import NuestroServicios from '../Seccions/NuestroServicios'
import S7ptimo from '../Seccions/S7ptimo'
import ResultadosRecientes from '../Seccions/ResultadosRecientes'
import CTA_Final from '../Seccions/CTA_Final'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <Diferenciador/>
    <NuestroServicios/>
    <S7ptimo/>
    <ResultadosRecientes/>
    <CTA_Final/>
    </>
  )
}

export default Home