import type { GatsbyConfig } from "gatsby"

const pathPrefix= "/blog_gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Itapemirim`,
    description: "Um site em homenagem a Viação Itapemirim",
    image: `${pathPrefix}/icon.png`,
    siteUrl: `https://henriquemvss.github.io`,
    pathPrefix
  },
  pathPrefix,
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-jsx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name:"data",
        path:`${__dirname}/data`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name:"posts",
        path:`${__dirname}/posts`
      }
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        typeName:`Json`,
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}

export default config
