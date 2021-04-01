import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { load as loadAccount } from '../../actions'
import { connect } from 'react-redux'

class ShelfForm extends React.Component {
    // componentDidMount() {
    //     this.props.initialValues;
    // }



    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput =({ input, label, meta }) => {
        console.log(input);
        console.log('input');
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        console.log(this.props);
        console.log('inside ShelfForm');
        this.props.onSubmit(formValues);
    }

    render() {
        console.log(this.props);
        console.log('inside ShelfForm');
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)} 
                className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <  name="description" component={this.renderInput}  label="Enter Description" />
                <  className="ui button primary">Submit</button>
            </ >
            
        );
    }
};

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
         .title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors
};

// export default connect()(reduxForm({   This format will work to connect
//     form: 'shelfCreate',
//     validate
// })(ShelfCreate));

ShelfForm =  (reduxForm({
    form: 'shelfForm',
    validate
})(ShelfForm));


ShelfForm = connect(
    state => ({
      initialValues: state.shelfs.selectedShelf // pull initial values from account reducer
    }),
    { load: loadAccount } // bind account loading action creator
  )(ShelfForm)

  export default ShelfForm;