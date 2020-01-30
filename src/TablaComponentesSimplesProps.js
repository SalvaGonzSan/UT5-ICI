import React, { Component } from "react";

const TablaCabecera = () => {
    return (
        <thead>
            <tr>
                <th>Nombre:</th>
                <th>Apellidos:</th>
            </tr>
        </thead>
    )
}


const TablaCuerpo = props => { /*Luego probamos paso de props con paréntesis*/
    const filasDeDatos = props.datosActoresActrices.map((fila, indice) => {
        return ( /*Return del método map*/
            <tr key={indice}>
                <td>{fila.nombre}</td>
                <td>{fila.apellidos}</td>
            </tr>
        )
    }
    )
    return ( /*Return del componente TablaCuerpo*/
        <tbody>
            {filasDeDatos}
        </tbody>

    )

}


class TablaComponentesSimplesProps extends Component {
    render() {
        const { datosActoresActrices } = this.props /*Utilizo props pasados al componente desde AplicacionPrincipal.js*/
        return (
            <table>
                <TablaCabecera />
                <TablaCuerpo datosActoresActrices={datosActoresActrices} />
            </table>
        )
    }
}

export default TablaComponentesSimplesProps



