import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_noMatch.css';

export class NoMatch extends Component {
    render() {
        return (
            <div className="no-match">
                <div className="error-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="error-text">
                                    <h1 className="error">404 Error</h1>
                                    <div className="im-sheep">
                                        <div className="top">
                                            <div className="body"></div>
                                            <div className="head">
                                                <div className="im-eye one"></div>
                                                <div className="im-eye two"></div>
                                                <div className="im-ear one"></div>
                                                <div className="im-ear two"></div>
                                            </div>
                                        </div>
                                        <div className="im-legs">
                                            <div className="im-leg"></div>
                                            <div className="im-leg"></div>
                                            <div className="im-leg"></div>
                                            <div className="im-leg"></div>
                                        </div>
                                    </div>
                                    <h2>Oops!</h2>
                                    <h3>Esta página não pode ser encontrada...</h3>
                                    <p>Desculpe mas a página que você está procurando não existe, foi removida ou o nome foi alterado.</p>
                                    <Link className="nav-link" to="/">
                                        <button className="btn btn-primary btn-round">Voltar para Home</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default NoMatch;
