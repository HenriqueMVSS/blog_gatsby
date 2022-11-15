import React from "react"
import type { HeadFC } from "gatsby"
import '../layout/global.css'
import { Layout } from "../layout/Layout"
import { Header, HeaderProps } from "../layout/Header"
import { Feed } from "../components/Feed"
import { graphql, PageProps } from "gatsby"

const IndexPage = ({data}: PageProps) => {
  const profileHeaderProps = (data as any).json as HeaderProps;
  const items = (data as any).allMarkdownRemark.nodes.map(({frontmatter, fields}:any)=> ({
    ...frontmatter,
    link: `/posts/${fields.slug}`,
    image: "https://rodoviaria.site/wp-content/uploads/2017/07/img_596cb0d247044.png",

  }))
  
  return (
    <>
      <Layout >
        <header>
          <Header 
          {...profileHeaderProps }
          />
        </header>
        <div className="feed-container">
          <Feed items={items}/>
        </div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
{
  json {
    avatar
    description
    name
  }
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      fields {
        slug
      }
      frontmatter {
        author
        date
        title
      }
    }
  }
}
`

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
