import React from "react"
import type { HeadFC } from "gatsby"
import '../layout/global.css'
import { Layout } from "../layout/Layout"
import { Header } from "../layout/Header"
import { Feed } from "../components/Feed"

const IndexPage = () => {
  const items = Array.from({length:24}, (_, index)=> ({
    title: `Title ${index}`,
    link: `https://google.com/${index}`,
    image: "https://rodoviaria.site/wp-content/uploads/2017/07/img_596cb0d247044.png",
  }))
  
  return (
    <>
      <Layout >
        <header>
          <Header 
          avatar="http://3.bp.blogspot.com/_3KRGf7MkGsw/S8u-2VXslXI/AAAAAAAAEwM/SeeAtMyFhRI/s1600/dsitapemirim20517.jpg" 
          description="Fundada em 4 de julho de 1953, no município de Cachoeiro de Itapemirim, no Espírito Santo por Camilo Cola, a Itapemirim se consolidou por ser uma das viações mais utilizadas por passageiros que viajam pelo Brasil, sobretudo na região do Nordeste.Em 4 de julho de 1953 a Viação Itapemirim Ltda. Inicialmente, com 70 funcionários e 16 ônibus, a nova empresa era reservada apenas a fazer viagens pelo Espírito Santo, considerando que na época a situação das estradas brasileiras era bastante precária, onde muitos brasileiros ainda estavam acostumados a viajar para outros estados nos chamados paus-de-arara."        
          name="Viação Itapemirim"
          />
        </header>
        <div className="feed-container">
          <Feed items={items}/>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
