import * as React from "react"
import type { HeadFC } from "gatsby"

const IndexPage = () => {
  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
