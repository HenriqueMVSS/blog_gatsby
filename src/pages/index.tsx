import React from "react"
import type { HeadFC } from "gatsby"
import '../layout/global.css'
import { Layout } from "../layout/Layout"

const IndexPage = () => {


  return (
    <>
      <Layout />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
