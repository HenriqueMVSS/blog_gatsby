import * as React from "react"
import type { HeadFC } from "gatsby"
import '../layout/global.css'
import { Appbar } from "../layout/Appbar"
import { Footer } from "../layout/footer"

const IndexPage = () => {
  return (
    <>
      <Appbar />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
