import React from "react";
import { Form } from "../components/Form";

export function FooterMobile(){
    return (
       <> 
        <div className="footer">
            <Form />
           <div className="footer-items">
            <div className="content" ><a href="/"> Home</a></div>
            <div className="content"><a href="#">Contato</a></div>
            <div className="content"><a href="#">Sobre-nos</a></div>
           </div> 

        </div>

        <style jsx>{`

            .footer-items {
                background: rgba(4,4,2,0.9);
                border-top: 1px solid #ccc;
                padding: 0 8px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                bottom: 0;
                left:0;
                width: 100%;
                position: relative;
                margin-top: 5px;
            }   

            .content {
                padding: 8px;
                
            }

            a{
                font-weight: bold;
                text-decoration: none;
                color: #ffde00;
            }
        `}</style>
       </> 
    )
}