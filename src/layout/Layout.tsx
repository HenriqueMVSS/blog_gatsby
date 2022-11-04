import React from "react";
import { Appbar } from "./Appbar";
import { Footer } from "./footer";

export function Layout(){
    return(
        
    <>
       <div className="app-bar">
        <Appbar />
       </div>
       <div className="header">
         teste
       </div>
       <div className="footer">
            <Footer/>
        </div>

        <style jsx>{`
        .footer{
            display: none;
        }

        .header {
            padding-top:67px;
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