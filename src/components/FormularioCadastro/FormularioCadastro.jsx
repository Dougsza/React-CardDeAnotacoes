import React,{Component} from "react";
import "./estilo.css";
class FormularioCadastro extends Component{
    constructor(props){
        super(props);
        this.titulo = '';
        this.texto = '';
    }
    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
        console.log(this.titulo);
    }
    _handlerMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
        console.log(this.texto);
    }
    _criarCard(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarCard(this.titulo,this.texto);
    }
    render(){
        return(
            <form className = "form-cadastro"
            onSubmit = {this._criarCard.bind(this)}
            >
                <input 
                    type="text" 
                    placeholder = "Digite o titulo:"
                    className = "form-cadastro_input"
                    onChange = {this._handleMudancaTitulo.bind(this)}
                />
                <textarea 
                    rows = {15}
                    placeholder = "Digite a sua nota:"
                    className = "form-cadastro_input"
                    onChange = {this._handlerMudancaTexto.bind(this)}
                />
                <button className = "form-cadastro_input form-cadastro_submit">
                    Submeter nota
                </button>      
            </form>
        )    
    }
}
export default FormularioCadastro;