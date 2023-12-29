import "./formacoes.css"
import { useLocation } from "react-router-dom"
import Card_Certificado from "../../components/Card_Certificado/Certificado"
function Formacoes(){

    const formacoes = useLocation()
    const isFormacoesPage = formacoes.pathname === '/formacoes';

    return(
        <div className={`tela-formacoes ${isFormacoesPage ? 'formacoes-page' : ''}`}>
            <div className="title">
            <h1>Formações e Certificados</h1>
            </div>
            <main>
                <div className="input">
                    <input type="text"/>
                </div>
                <div className="certificados">
                    <Card_Certificado title="Programação Full Stack" url="https://media.licdn.com/dms/image/D4D22AQHOMRfd4q-mhA/feedshare-shrink_800/0/1700514633828?e=1706745600&v=beta&t=08_ufd0rntu3ACQHJA0QzyNVX6M1ZV1-ehq9ze1T14I" instituicao="Infinity School"/>
                    <Card_Certificado title="Versionamento com Git e Github" url="https://media.licdn.com/dms/image/D4D22AQGl6qT9oHeEyA/feedshare-shrink_800/0/1693070094714?e=1706745600&v=beta&t=6On_F1JEHf11K0-eTyBa_1Dck9TtXx9nE0jjXVGSbHQ" instituicao="DIO"/>
                </div>
            </main>
       

       </div>
    
    )
}

export default Formacoes