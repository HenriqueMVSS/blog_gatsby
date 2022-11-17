import type { GatsbyConfig } from "gatsby"

const pathPrefix= "/blog_gatsby";
const title = `Itapemirim`;

const config: GatsbyConfig = {
  siteMetadata: {
    title,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: title,
        start_url: "/",
        background_color: "rgb(241,210,16)",
        theme_color: "rgb(241,210,16)",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
  ],
}

export default config
