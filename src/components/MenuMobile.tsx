import React from "react";
import {IoMdClose} from "@react-icons/all-files/io/IoMdClose" ;

type MobileProps = {
    menuMob: string,
    setMenuMob: string,
    isVisible: ()=>{}
}

export function MenuMobile({menuMob, setMenuMob, isVisible} : MobileProps){
    return (
        <>
            <div className="container-mob" isVisible={menuMob}>
                <div className="close">
                    <IoMdClose size={40} onClick={setMenuMob(false)}/>
                </div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Contato</a>
                    <a href="#">Sobre-nos</a>
                </nav>
            </div>
         
            
            <style jsx>{`
                
                .container-mob{
                    display:none;
                }

                @media(max-width: 600px){   
                    .container-mob{
                        
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        right:0;
                        z-index:5;
                        position:absolute;
                        backdrop-filter: blur(3px);
                        display:flex;
                        justify-content:center;
                        align-items: center;
                        background: rgba(17,18,17,0.95);
                        background: linear-gradient(34deg, rgba(25,88,24,0.95)0%, rgba(17,18,17,0.95) 95%);
                    }
                        
                    a{
                        text-decoration: none;
                        color: #fff;
                        font-size:25px;
                    } 

                    .close {
                        position:absolute;
                        top: 1rem;
                        right: 1rem;
                        color: #fff;
                    } 

                    nav {
                        display:flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        gap: 2rem;
                    }
                }
            `}</style>
        </>

    )
}