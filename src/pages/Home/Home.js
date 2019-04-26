import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_home.css';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                    <div className="inner cover">
                        <h1 className="cover-heading">Bem vindo</h1>
                        <p className="lead">Clique no botão abaixo para iniciar o desafio React!</p>
                        <p className="lead">
                            <Link to="/formprofile">
                                <button className="btn btn-lg btn-info">Cadastre-se</button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;