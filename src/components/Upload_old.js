import React, { Component } from 'react';
import { Formik } from "formik";

class Thumb extends React.Component {
    state = {
        loading: false,
        thumb: undefined,
    };

    componentWillReceiveProps(nextProps) {
        if (!nextProps.file) { return; }

        this.setState({ loading: true }, () => {
            let reader = new FileReader();

            reader.onloadend = () => {
                this.setState({ loading: false, thumb: reader.result });
            };

            reader.readAsDataURL(nextProps.file);
        });
    }

    render() {
        const { file } = this.props;
        const { loading, thumb } = this.state;

        if (!file) { return null; }

        if (loading) { return <p>loading...</p>; }

        return (<img src={thumb}
            alt={file.name}
            className="img-thumbnail mt-2"
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
                    return (
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-12 form-group">
                                    <div className="text-left">
                                        <Thumb file={values.file} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 form-group">
                                    <label>Foto do Perfil</label>
                                    <input id="file" name="file" type="file" onChange={(event) => {
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

export default Upload;