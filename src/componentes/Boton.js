import React from "react";
import './Boton.css'

function Boton(props){

    const enviarFuncion = () =>{
        if(props.children != 'All'){
        props.accion(props.children)
    }else{
        props.accion()
    }
    }

    return(
        <button className={`boton ${(props.children == 'All') ? 'all' : ''}`} onClick={enviarFuncion}>{props.children}</button>
    )

}

export default Boton;
