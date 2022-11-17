import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import '../layout/global.css'
import { Layout } from "../layout/Layout"
import { Header, HeaderProps } from "../layout/Header"
import { Feed } from "../components/Feed"
import { graphql, PageProps } from "gatsby"
import {getImage} from "gatsby-plugin-image"
import { MetaTags } from "../components/MetaTags"

const IndexPage = ({data}: PageProps) => {
  const profileHeaderProps = (data as any).json as HeaderProps;
  const items = (data as any).allMarkdownRemark.nodes.map(({frontmatter, fields}:any)=> ({
    ...frontmatter,
    link: `/posts/${fields.slug}`,
    image: getImage(frontmatter.image.childImageSharp),

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
        image {
          childImageSharp {
            gatsbyImageData(
              width: 200
              height: 200
              formats: [WEBP, JPG]
              layout: FULL_WIDTH
              aspectRatio: 1
            )
          }
        }
      }
    }
  }
}
`

export default IndexPage
export const Head = ({ data }: HeadProps) => {
  const { name } = (data as any).json;
  return <MetaTags title={`${name}`}  />;
};
