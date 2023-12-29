import "./experiencias.css"
import React from "react"
import { useLocation } from "react-router-dom"
import salao from "../../assets/salao.png"
import logo_burger_king from "../../assets/bk.jpg"
import logo_brasilgas from "../../assets/brasilgas.jpeg"
import Cartao from "../../components/Cartao/cartao";
import IN from "../../assets/IN.png"
import totvs from "../../assets/totvs.png"




function Experiencias(){

    const EX = useLocation();
    return(
        <div className={`tela-EX ${EX.pathname === '/experiencias'}`}>
            <div className="experiences">
                <Cartao url={logo_brasilgas} title="Aux. Administrativo em Brasilgás" dataInicio="22/09/2020" dataFinal = "20/02/2021"/>
                <Cartao url={logo_burger_king} title="Atendente em Burguer King" dataInicio="01/03/2021" dataFinal = "25/05/2021"/>
                <Cartao url={salao} title="Atendente em Salão Conceptos" dataInicio="01/09/2021" dataFinal = "28/07/2022"/>
                <Cartao url={IN} title="Monitora na Infinity School" dataInicio="16/01/2023" dataFinal = "25/08/2023"/>
                <Cartao url={totvs} title="Estagiária Front End na TOTVS" dataInicio="09/10/2023" dataFinal = "Até o momento"/>
                <Cartao url={IN} title="Professora na Infinity School" dataInicio="18/12/2023" dataFinal = "Até o momento"/>
            </div>
        </div>
    )
}

export default Experiencias