import React, { Component } from "react";

class Collatz extends Component {
    
    cajaNumero = React.createRef();

    generarCollatz = (e) => {
        e.preventDefault();
        let numero = parseInt(this.cajaNumero.current.value);
        let aux = []

        while(numero!=1){
            if(numero%2==0){
                numero = numero / 2;
            }else{
                numero = numero * 3 + 1;
            }
            aux.push(numero);
        }

        this.setState({
            numeros: aux
        })
    }

    state = {
        numeros: []
    }
    
    render(){
        return(
            <div>
                <h1>Conjetura de Collatz</h1>
                <form onSubmit={this.generarCollatz}>
                    <label>Introduzca número:</label>
                    <input type="text" ref={this.cajaNumero}></input>
                    <button>Mostrar conjetura</button>
                    <ul>
                        {
                            this.state.numeros.map((numero, index) => {
                                return(<li key={index}>{numero}</li>)
                            })
                        }
                    </ul>
                </form>
            </div>
        )
    }
}

export default Collatz;