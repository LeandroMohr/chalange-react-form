import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './_profile.css';
import img from '../../img/success.png'

export class Profile extends Component {
    render() {
        return (
            <div className="profile mb-5">
                <div className="profile-container card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img
                                // src={this.props.user.picture}
                                src={img}
                                alt={this.props.user.firstName}
                                className="card-img img-thumbnail mt-2"
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Profile</h5>
                                <p className="card-text">
                                    Eu sou o {this.props.user.firstName}{this.props.user.lastName} e eu tenho {this.props.user.age} anos e você pode enviar e-mails para {this.props.user.email}.
                                    Eu moro em {this.props.user.city}-{this.props.user.state}.
                                    Eu gosto de {this.props.user.interest.value}.  {this.props.user.checkbox ? 'Por favor me envie newsletter' : 'Por favor NÃO me envie newsletter'}.
                                    Para me contatar ligue no telefone {this.props.user.phone}.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <Link to="/formprofile">
                        <button className="btn btn-primary mr-3">Alterar</button>
                    </Link>
                    <Link to="/sucess">
                        <button className="btn btn-success">Confirmar</button>
                    </Link>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Profile);
