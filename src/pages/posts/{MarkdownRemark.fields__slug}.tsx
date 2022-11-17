import React from "react";
import { PostView } from "../../components/PostView";
import { Layout } from "../../layout/Layout";
import {graphql, HeadProps, PageProps} from "gatsby"
import { getImage } from 'gatsby-plugin-image';
import type { HeadFC } from "gatsby"
import { MetaTags } from "../../components/MetaTags";


export default function Post({ data } : PageProps){
    const {html, frontmatter: {author, date, title, image, authorImage}} = (data as any).markdownRemark;
    return (
        <Layout>
            <div className="post-page">
                <PostView 
                image={getImage(image.childImageSharp)} 
                authorAvatar= {getImage(authorImage.childImageSharp)}
                authorUsername={author} 
                content={html}  
                publishDate={new Date(date)}/>
            </div>

            <style jsx>{`
                .post-page{
                   padding: 75px 0;
                }

                @media(max-width: 600px){
                    .post-page{
                        padding: 5px 5px;
                    }
                } 
                
            `}</style>
        </Layout>
    )
}

export const pageQuery = graphql`

query GetPostBySlug($id: String!) {
    markdownRemark(id: {eq: $id}) {
      fields {
        slug
      }
      html
      frontmatter {
        author
        date
        title
        image {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              height: 800
              width: 800
              layout: CONSTRAINED
              formats: [WEBP,JPG]
            )
          }
        }
        authorImage {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              formats: [WEBP, JPG]
              height: 64
              layout: CONSTRAINED
              width: 64
            )
          }
        }
      }
    }
  }

`
export const Head = ({ data }: HeadProps) => {
  return <MetaTags title={`Viação Itapemirim`}  />;
};
