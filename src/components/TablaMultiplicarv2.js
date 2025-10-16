import React, { Component } from "react";


class TablaMultiplicarv2 extends Component {

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

        numeros = []

        generarNumerosAleatorios = () => {
            for(let i=0; i<=5; i++){
                let aleatorio = Math.floor(Math.random()*100);
                this.numeros.push(aleatorio);
            }
            
        }
    
        state = {
            numero: 0, 
            resultado: [],
        }


    
        render () {
            return(
                <div>
                    {this.generarNumerosAleatorios()}
                    <h1>Tabla multiplicar</h1>
                    <form onSubmit={this.generarTablaMultiplicar}>
                        <label>Seleccione un número del select </label>
                        <select ref={this.cajaNumero}>
                            {
                                this.numeros.map((numeros, index) => {
                                    return(
                                        <option key={index}>{numeros}</option>
                                    )
                                })
                            }
                        </select><br></br>  
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

export default TablaMultiplicarv2;