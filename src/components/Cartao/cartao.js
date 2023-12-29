import "./cartao.css"

function Cartao(props){
    return(
        <div className="cartao">
            <img id="image" src={props.url} alt="#"/>
            <div className="infos">
            <h3>{props.title}</h3><br/>
            <span>{props.dataInicio} - {props.dataFinal}</span>
            </div>
        </div>
    )

}



export default Cartao