import React, { Component } from "react";

class FormSimple extends Component {
    //Creamos una variable de referencia para cada objeto de formulario
    cajaNombre = React.createRef();

    peticionFormulario = (event) => {
        event.preventDefault();
        console.log("Peticion lista")
        let nombre = this.cajaNombre.current.value;
        console.log(nombre);
        this.setState({
            nombre: nombre
        })
    }

    state = {
        nombre: ""
    }

    render(){
        return(
            <div>
                <h1>FORMULARIO</h1>
                <h2 style={{color: "Blue"}}>{this.state.nombre}</h2>
                <form onSubmit={this.peticionFormulario}>
                    <label>Nombre: </label>
                    <input type="text" ref={this.cajaNombre}></input>
                    <button>Realizar petición</button>
                </form>
            </div>
        )
    }

}

export default FormSimple;