import React from "react";

const TablaCabecera = () => {
    return (
        <thead>
            <tr>
                <th>Nombre:</th>
                <th>Borrar:</th>
            </tr>
        </thead>
    )
}

const TablaCuerpo = props => { /*El paso de parámetros se puede hacer con paréntesis o sin paréntesis*/
    const filasDeDatos = props.datosPersonaje.map((fila, indice) => {
        return (
            <tr key={indice}>
                <td>{fila.nombre}</td>
                <td><button onClick={() => props.borrarPersonaje(indice)}>Borrar</button></td>
            </tr>
        )
    }
    )
    return (
        <tbody>
            {filasDeDatos}
        </tbody>
    )
}

const TablaComponentesSimplesState = (props) => { /*Ahora pasa a ser un componente simple para utilizar state*/
    const { datosPersonaje, borrarPersonaje } = props;
    return (
        <table>
            <TablaCabecera />
            <TablaCuerpo datosPersonaje={datosPersonaje} borrarPersonaje={borrarPersonaje} />
        </table>
    )
}

export default TablaComponentesSimplesState
