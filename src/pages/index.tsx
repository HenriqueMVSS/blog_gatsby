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
          avatar="https://i.pinimg.com/564x/20/b6/c2/20b6c2fc34a8e9fab5318dad3f8f9809.jpg" 
          description="Fundada em 4 de julho de 1953, no município de Cachoeiro de Itapemirim, no Espírito Santo por Camilo Cola, a Itapemirim se consolidou por ser uma das viações mais utilizadas por passageiros que viajam pelo Brasil, sobretudo na região do Nordeste."        
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
