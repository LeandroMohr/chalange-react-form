import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Upload from '../../components/Upload_old'
import MySelect from '../../components/MySelect'
import Options from '../../data/Options'
import Slider from 'rc-slider';
import { connect } from 'react-redux';
import { submitForm } from '../../actions/actionTypes';
import { withRouter } from "react-router-dom";


import './_formProfile.css';
import 'rc-slider/assets/index.css';

class FormProfile extends Component {
  state = {
    cities: [],
  }

  renderCities = cities => {
    return cities.map((cidade, index) => {
      return (
        <option key={index} value={cidade.cidade}>
          {cidade.cidade}
        </option>
      )
    })
  }

  render() {
    const {
      picture,
      firstName,
      lastName,
      age,
      email,
      phone,
      state,
      city,
      address,
      interest,
      checkbox
    } = this.props.user;
    return (
      <div className="form-profile">
        <div className="container">
          <h1 className="well">Form</h1>
          <Formik
            initialValues={{
              picture,
              firstName,
              lastName,
              age,
              email,
              phone,
              state,
              city,
              address,
              interest,
              checkbox
            }}
            onSubmit={(values, { setSubmitting }) => {
              this.props.submit(values)
              setSubmitting(false);
              this.props.history.push("/profile");
            }}
          >
            {({
              values,
              touched,
              errors,
              handleChange,
              handleSubmit,
              setFieldValue,
              setFieldTouched,
              isSubmitting
            }) => {
              const handleEstadoChange = (event) => {
                let estado = event.target.value;
                setFieldValue('state', estado);

                this.setState({ cities: [] });

                const cities = Options.getCities().filter(item => {
                  return item.estadoId === estado
                });

                this.setState({ cities });

              }
              const handleChangeSlider = (slider) => {
                setFieldValue('age', slider)
              }
              return (
                <Form onSubmit={handleSubmit}>
                  <div className="col-lg-12 well">
                    <div className="row">
                      <Upload />
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="row">
                          <div className="col-sm-6 form-group">
                            <label>Primeiro Nome</label>
                            <Field
                              type="text"
                              name="firstName"
                              className="form-control"
                              placeholder="Primeiro Nome"
                              value={values.firstName}
                              onChange={handleChange}
                            />
                            <ErrorMessage
                              name="firstName"
                              component="div"
                            />
                          </div>
                          <div className="col-sm-6 form-group">
                            <label>Last Nome</label>
                            <Field
                              type="text"
                              name="lastName"
                              className="form-control"
                              placeholder="Sobrenome"
                              value={values.lastName}
                              onChange={handleChange}
                            />
                            <ErrorMessage
                              name="lastName"
                              component="div"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 form-group">
                        <div className="slider age">
                          <label>Idade</label>
                          <Slider
                            name='age'
                            min={0}
                            defaultValue={0}
                            marks={{ 0: '13-19', 33: '20-29', 67: '30-35', 100: '45+' }}
                            step={null}
                            value={values.age}
                            onChange={handleChangeSlider}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="row">
                          <div className="col-sm-6 form-group">
                            <label>Email</label>
                            <Field
                              type="email"
                              name="email"
                              placeholder="email@email.com"
                              className="form-control"
                              value={values.email}
                              onChange={handleChange}
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                            />
                          </div>
                          <div className="col-sm-6 form-group">
                            <label>Telefone</label>
                            <Field
                              type="number"
                              name="phone"
                              placeholder="(99) 9 9999-9999"
                              className="form-control"
                              value={values.phone}
                              onChange={handleChange}
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <label >Estado</label>
                        <Field
                          component="select"
                          value={values.state}
                          name="state"
                          className="form-control"
                          onChange={handleEstadoChange}>
                          <option value='selecione'>Selecione</option>
                          {Options.getStates().map((e, index) => <option key={index} value={e.id}>{e.estado}</option>)}
                        </Field>
                      </div>
                      <div className="col-sm-6 form-group">
                        <label >Cidade</label>
                        <Field
                          component="select"
                          name="city"
                          className="form-control">
                          {this.renderCities(this.state.cities)}
                        </Field>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <label>Endereço</label>
                        <Field
                          type="text"
                          name="address"
                          placeholder="Av. Brasil"
                          className="form-control"
                          value={values.address}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <MySelect
                          value={values.topics}
                          onChange={setFieldValue}
                          onBlur={setFieldTouched}
                          error={errors.topics}
                          touched={touched.topics}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <Field
                          type="checkbox"
                          name="checkbox"
                          className="form-check-input"
                          id="checkNewsletter"
                          value={values.interest}
                          onChange={handleChange}
                        />
                        <label htmlFor="checkNewsletter">Desejo receber novidades por e-mail.</label>
                      </div>
                      <div className="col-sm-6">
                        <button type="submit" className="btn btn-lg btn-info float-right mb-3" disabled={isSubmitting}>Submit</button>
                      </div>
                    </div>
                  </div>
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submit: user => {
      dispatch({
        type: submitForm,
        user: user
      })
    }
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormProfile));