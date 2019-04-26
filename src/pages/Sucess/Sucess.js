import React, { Component } from 'react';
import './_sucess.css';
import success from '../../img/success.png';
export class Sucess extends Component {
    render() {
        return (
            <div className="success">
                <div className="content">
                    <div className="notify successbox">
                        <h1>Sucesso!</h1>
                        <span className="messageicon"><img src={success} alt="Success" /></span>
                        <p>Muito obrigado por realizar o cadastro.</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Sucess;
