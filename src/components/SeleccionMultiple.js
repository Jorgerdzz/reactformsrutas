
import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    selectMultiple = React.createRef();

    mostrarSeleccionados = (e) => {
        e.preventDefault();
        let options = this.selectMultiple.current.options;
        var data = "";
        for(let option of options){
            if(option.selected){
                data += option.value + " ";
            }
            
        }
        this.setState({
            seleccionados: data
        })
    }

    state = {
        seleccionados: ""
    }

  render() {
    return (
      <div>
        <h1>Seleccion Multiple</h1>
        <h2 style={{color:"blue"}}>{this.state.seleccionados}</h2>
        <form onSubmit={this.mostrarSeleccionados}>
            <label>Seleccione varios elementos</label>
            <select size={5} multiple ref={this.selectMultiple}>
                <option>Elemento 1</option>
                <option>Elemento 2</option>
                <option>Elemento 3</option>
                <option>Elemento 4</option>
                <option>Elemento 5</option>
            </select>
            <button>Mostrar selecionados</button>
        </form>
      </div>
    )
  }
}
