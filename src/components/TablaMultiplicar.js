import React, { Component } from "react";

class TablaMultiplicar extends Component {

    cajaNumero = React.createRef();

    generarTablaMultiplicar = (e) => {
        e.preventDefault();
        let numero = this.cajaNumero.current.value;
        let aux = [];
        for(let i=1; i<=10; i++){
            let resultado = numero * i;
            aux.push(resultado);
        }
        this.setState({
            numero: numero,
            resultado: aux
        })
    }

    state = {
        numero: 0, 
        resultado: []
    }

    render () {
        return(
            <div>
                <h1>Tabla multiplicar</h1>
                <form onSubmit={this.generarTablaMultiplicar}>
                    <label>Introduzca numero:</label>
                    <input type="number" ref={this.cajaNumero}></input>
                    <button>Generar tabla multiplicar</button>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Operación</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                this.state.resultado.map((numero, index) => {
                                    return(
                                        <tr><td>{this.state.numero} * {index+1}</td><td>{numero}</td></tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }


}

export default TablaMultiplicar;