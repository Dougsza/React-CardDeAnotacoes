import React, {Component} from "react"
import  ListaDeNotas  from "./components/ListaDeNotas/";
import  FormularioCadastro  from "./components/FormularioCadastro/";
import "./assets/App.css"
import "./assets/index.css"
//O app também é um componente do React
class App extends Component {
  criarCard(titulo, texto){
    console.log(`Uma nova nota foi criada: ` + titulo + " " + texto);
  }
    render(){
      return(
       <section className = "conteudo">
         <FormularioCadastro criarCard = {this.criarCard}></FormularioCadastro>
         <ListaDeNotas></ListaDeNotas>
       </section> 
      );
    }  
}

export default App;
