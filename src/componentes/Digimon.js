import React from "react";
import './Digimon.css'

function Digimon(props) {
    return (
        <div className="digimon-contenedor">
            <h2 className="id">#{props.id}</h2>
            <h1 className="nombre">{props.nombre}</h1>
            <img className="imagen" src={props.imagen}></img>
            <h2 className="nivel">{props.nivel}</h2>
        </div>
    )
}

export default Digimon;
