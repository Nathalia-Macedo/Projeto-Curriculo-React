import { Link } from "react-router-dom"
import estrelas from "../../assets/estrelas.png"
import "./Certificado.css"

function Card_Certificado(props){
    return(
        <div className="C_C">
            <img src={estrelas} alt/>
            <span>{props.title}<br/>{props.instituicao}</span>
            <Link  className="link_certificado" to={props.url}>Ver Certificado</Link>
        </div>
    )
}

export default Card_Certificado