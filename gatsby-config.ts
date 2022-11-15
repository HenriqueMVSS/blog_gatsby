import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  pathPrefix: "/blog_gatsby",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
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
