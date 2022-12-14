import React from "react";
import type { HeadFC, HeadProps } from "gatsby"
import { Footer } from "../components/Footer";
import { FooterMobile } from "../components/FooterMobile";
import { Form } from "../components/Form";
import { Appbar } from "../layout/Appbar";
import { MetaTags } from "../components/MetaTags";

export default function Contact(){
    
    return (
        <>
        <nav>
         <Appbar />
        </nav>
         
         <div className="form-contact">
            <Form />
         </div>

         <footer className="footer">
            <Footer />
         </footer>

         <footer className="footer-mobile">
            <FooterMobile />
         </footer>

         <style jsx>{`
            .form-contact {
                padding-top: 64px;
            }  

            .footer {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
            }

            .footer-mobile {
                display: none;
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
            }

            @media(max-width: 600px) {
                .footer{
                    display:none;
                }

                .footer-mobile {
                     display: block;
                
                 }
            }

            @media(max-height: 600px){
                
                .footer{
                    display:none;
                }
                
                .footer-mobile {
                display: block;
                position: relative;
                bottom: 0;
                left: 0;
                width: 100%;
            }
            
            }
            
        `}</style>
         
        </>
        
    )
}
export const Head = ({ data }: HeadProps) => {
    return <MetaTags title={`Viação Itapemirim`}  />;
  };
  