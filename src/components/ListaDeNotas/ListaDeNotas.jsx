import {Component} from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
    render(){
        return (
            <ul className = "lista-notas">               
                { /*Começo do JavaScript*/
                
                 /*Para utilizar o Javascript dentro de um arquivo JSX basta utilizar as chaves {}  
                   Fazer um loop for dentro do JSX não é compativel por isso utilizamos o Array.of e o map que devolve uma lista de lista
                   dentro da tag <ul> assim ele consegue mostrar na tela.
                 */               
                 Array.of("Trabalho","Trabalho","Estudo").map((categoria, index) =>{
                     return (
                    <li className = "lista-notas_item" key = {index}>                        
                        <CardNota/> 
                    </li> 
                     )
                 })
                /*Final do JavaScript*/}                          
            </ul>
        )
    }
}
export default ListaDeNotas;
