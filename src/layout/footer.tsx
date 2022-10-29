import React from "react";

export function Footer(){
    return (
       <> 
        <div className="footer">
            <div className="content" ><a href="#"> Home</a></div>
            <div className="content"><a href="#">Contato</a></div>
        </div>

        <style jsx>{`
            .footer {
                background: #fff;
                border-top: 1px solid #ccc;
                padding: 0 8px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: fixed;
                bottom: 0;
                left:0;
                width: 100%;
            }   

            .content {
                margin-left: 15px;
                
            }

            a{
                font-weight: bold;
                text-decoration: none;
                color: #144ecb;
            }

            a:hover{
              color:#0f3484;
              text-decoration:underline ;
            }
        `}</style>
       </> 
    )
}