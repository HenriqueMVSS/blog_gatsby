import React, { useState } from "react";
import { MenuMobile } from "../components/MenuMobile";
import { Footer } from "./footer";



export function Appbar(){

    const [menuMob, setMenuMob] = useState(false);


    return (
       <>   
             <MenuMobile 
                menuMob={menuMob}
                setMenuMob={setMenuMob}
            />
            <div className="app-bar">
                <div className="content-bar">
                    <h1 className="title-bar">História das Linguagens de Programação</h1>
                </div>

                <style jsx>{`
                    .app-bar{
                        width:100%;
                        background: #fff;
                        border: 1px solid #ccc;
                        position: fixed;
                        top: 0;
                        left: 0;
                        padding: 0 8px;
                        box-sizing: border-box;
                    }

                    .content-bar {
                        margin: auto;
                        max-width: 980px;
                        height: 65px;
                        display:flex;
                        align-items:center;    
                        justify-content: center;           
                    }

                    .title-bar {
                        font-weight: bold;
                        font-size: 30px;
                        font-family: Georgia, 'Times New Roman', Times, serif;
                        color: #144ecb;
                    }

                `}
                </style>
            </div>
            <Footer/>
        </>
        
    );
}