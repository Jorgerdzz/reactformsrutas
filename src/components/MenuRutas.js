import { Component } from "react";

class MenuRutas extends Component {

    render () {
        return(
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/cine">Cine</a></li>
                    <li><a href="/musica">Música</a></li>
                    <li><a href="/formsimple">Formulario</a></li>
                    <li><a href="/collatz">Collatz</a></li>
                    <li><a href="/tablamultiplicar">Tabla Multiplicar</a></li>
                    <li><a href="/tablamultiplicarv2">Tabla Multiplicar version 2</a></li>
                    <li><a href="/seleccionmultiple">Selección multiple</a></li>
                </ul>
            </div>
        )
    }

}

export default MenuRutas;