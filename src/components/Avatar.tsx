import React from "react";
import IconAvatar from '../images/avatar.jpg'


export function Avatar(){

    return(
        <div className="home-icon">
            <div className="row">
                <div className="avatar item">
                    <img className="img-avatar" src={IconAvatar} alt="avatar"  />
                </div>
            </div>
            <style jsx>{`

                .img-avatar {
                    width:180px;
                    border-radius: 90px;
                }

                @media(min-width: 900px) {
                    .img-avatar {
                        width:256px;
                        display:flex;
                        align-items:center;
                    }


                
            `}</style>
        </div>   
    )
}