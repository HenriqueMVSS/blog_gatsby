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
          avatar="https://scontent.fssa26-1.fna.fbcdn.net/v/t39.30808-6/302219073_488805543250871_5299567555362865040_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TVFHBDS_1ygAX-VYUGs&_nc_ht=scontent.fssa26-1.fna&oh=00_AfCchNhy4EvdD1cd4S-IYY5-1Si9Tn2ymmJTPBPOxLlQuw&oe=636F5AD5" 
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
