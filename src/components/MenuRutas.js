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
                </ul>
            </div>
        )
    }

}

export default MenuRutas;