import React, { Component } from 'react';
import { Formik } from "formik";
import { connect } from 'react-redux'

class Thumb extends React.Component {
    state = {
        loading: false,
        thumb: undefined,
    };

    // componentWillReceiveProps(nextProps) {
    //     if (!nextProps.file) { return; }

    //     this.setState({ loading: true }, () => {
    //         let reader = new FileReader();

    //         reader.onloadend = () => {
    //             this.setState({ loading: false, thumb: reader.result });
    //         };

    //         reader.readAsDataURL(nextProps.file);
    //     });
    // }

    getBase64(file, cb) {
        let reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            cb(reader.result);
            this.setState({ loading: false, thumb: reader.result });
        };

        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    render() {
        const { file } = this.props;
        const { loading, thumb } = this.state;

        if (!file) { return null; }

        if (loading) { return <p>loading...</p>; }

        return (<img src={thumb}
            alt={file.name}
            className="card-img img-thumbnail mt-2"
            height={200}
            width={200} />);
    }
}

export class Upload extends Component {
    render() {
        return (
            <Formik
                initialValues={{ file: null }}
                render={({ values, setFieldValue }) => {
                    console.log(values.file)
                    return (
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-12 form-group">
                                    <div className="text-left">
                                        <Thumb
                                            name="picture"
                                            file={values.file}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 form-group">
                                    <label>Foto do Perfil</label>
                                    <input id="picture" name="picture" type="file" onChange={(event) => {
                                        setFieldValue("file", event.currentTarget.files[0]);
                                    }} className="form-control" />
                                </div>
                            </div>
                        </div>
                    );
                }}
            />
        );
    }
};

export default connect(null)(Upload)