import React from 'react';
import { withFormik } from 'formik';
import Select from 'react-select';

const formikEnhancer = withFormik({
    mapPropsToValues: props => ({
        interest: []
    }),
    handleSubmit: (values, { setSubmitting }) => {
        const payload = {
            ...values,
            interest: values.interest.map(t => t.value),
        };
        setTimeout(() => {
            alert(JSON.stringify(payload, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'MyForm',
});

const options = [
    { value: 'filmes', label: 'Filmes' },
    { value: 'livros', label: 'Livros' },
    { value: 'gastronomia', label: 'Gastronomia' },
    { value: 'esporte', label: 'Esporte' },
    { value: 'video-game', label: 'Video-game' },
    { value: 'saude', label: 'Saude' },
];

class MySelect extends React.Component {
    handleChange = value => {
        this.props.onChange('interest', value);
    };

    handleBlur = () => {
        this.props.onBlur('interest', true);
    };

    render() {
        return (
            <div>
                <label>Escolha um tópico de seu interesse</label>
                <Select
                    options={options}
                    multi={true}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                />
                {!!this.props.error &&
                    this.props.touched && (
                        <div style={{ color: 'red', marginTop: '.5rem' }}>
                            {this.props.error}
                        </div>
                    )}
            </div>
        );
    }
}

export default (formikEnhancer(MySelect))