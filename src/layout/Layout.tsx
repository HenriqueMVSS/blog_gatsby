import React from "react";
import { Appbar } from "./Appbar";
import { Footer } from "./footer";

export interface LayoutProps {
    children: React.ReactNode;
}

export function Layout(props : LayoutProps){
    return(
        
    <>
       <nav>
        <Appbar />
       </nav>
       <main className="content">
         {props.children}
       </main>
       <footer className="footer">
            <Footer/>
        </footer>

        <style jsx>{`
        .footer{
            display: none;
        }

        .content {
            padding-top:80px;
            margin: auto;
            max-width: 980px;
        }

        @media(max-width: 600px){

            .footer {
                display: block;
            }

        }

        @media(max-height: 600px){

            .footer {
                display: block;
            }

            }
       `}</style>
        
    
    </>
     
    )
}