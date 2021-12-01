import React, { Component } from "react";

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            error: ''
        };

        // bind para a função cadastrar , no onSubmit do form.
        this.cadastrar = this.cadastrar.bind(this);

    }

    cadastrar(event){
        const {nome, email, senha } = this.state;
        if( nome !== '' && email !== '' && senha !== ''){
            alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
            this.setState({error: ''})
        }else{
            this.setState({error: 'Ops! Parece que esta faltando algo!'})
        }


        // Não atualiza a pagina, sem o event do cadastrar(), atualiza a pagina
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>Novo usuário</h1>
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input type="text" value={this.state.nome} 
                        onChange={ (e) => this.setState({nome: e.target.value})}/>
                    <br/>
                    <label>Email: </label>
                    <input type="email" value={this.state.email} 
                        onChange={ (e) => this.setState({email: e.target.value})}/>
                    <br/>
                    <label>Senha:</label>
                    <input type="password" value={this.state.senha} 
                        onChange={ (e) => this.setState({senha: e.target.value})}/>
                    <br/>
                    <button type="submit">Cadastrar</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}

export default App;

