import React from "react";
import { PostView } from "../components/PostView";
import { Layout } from "../layout/Layout";

const date = new Date();
const content = `Ônibus da segunda geração do Tribus, lançado no final de 1984. 
Adentrando na década de 1980 com uma frota de aproximadamente 1500 ônibus, a Itapemirim começar a 
operar a rota Rio/SP/Rio, paralelo a isso, a empresa lança em 1981 com bastante publicidade a 
primeira geração do Tribus, baseando-se no pioneirismo dos já citados ônibus de 3 eixos lançados na década 
anterior. A viação aproveitara um período de grande euforia econômica no país, embalado pelo fim do 
Regime Militar, no qual os transportes rodoviários cresciam a índices altíssimos.
A empresa inaugura sua própria fábrica de ônibus, a Tecnobus, que seria responsável, no final de 
1984, pelo lançamento da segunda geração do Tribus, gerando muito sucesso (há indícios de que esta carroceria 
foi inspirada nos modelos Marcopolo III, naquela altura não mais produzidos).
No auge de sua linha de produção, ainda em meados da década de 1980, a Tecnobus chegou a fabricar um 
ônibus por dia. Na mesma década, adquire junto a Mercedes-Benz vários monoblocos O370 e O371 equipados 
com ar-condicionado para o serviço leito Rodonave.`.trim();

export default function Post(){
    return (
        <Layout>
            <div className="post-page">
                <PostView image="https://i.pinimg.com/736x/3e/57/24/3e5724106e62ec3d184010c2a0501a00--actuel-camping-car.jpg" authorAvatar="https://i0.wp.com/onibusetransporte.com/wp-content/uploads/2022/06/20220602_150018.jpg?resize=1024%2C752&ssl=1" authorUsername="Viação Itapemirim" content={content}  publishDate={date}/>
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