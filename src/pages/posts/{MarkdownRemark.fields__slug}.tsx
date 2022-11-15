import React from "react";
import { PostView } from "../../components/PostView";
import { Layout } from "../../layout/Layout";
import {graphql, PageProps} from "gatsby"


export default function Post({ data } : PageProps){
    const {html, frontmatter: {author, date, title}} = (data as any).markdownRemark;
    return (
        <Layout>
            <div className="post-page">
                <PostView 
                image="https://i.pinimg.com/736x/3e/57/24/3e5724106e62ec3d184010c2a0501a00--actuel-camping-car.jpg" authorAvatar="https://i0.wp.com/onibusetransporte.com/wp-content/uploads/2022/06/20220602_150018.jpg?resize=1024%2C752&ssl=1" 
                authorUsername={author} content={html}  
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
      }
    }
  }

`