import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { load as SHELF_FORM_LOAD } from '../../actions'
import { connect } from 'react-redux'
import Button from '@material-ui/core/button'

class ShelfForm extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }
    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //         title: this.props.title, 
    //         description: this.props.description
    //   }
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
        this.props.onSubmit(formValues);
    }

    render() {
        console.log(this.state);
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)} 
                className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput}  label="Enter Description" />
                {/* <input value={this.state.title}></input>
                <input value={this.state.description}></input> */}
                <Button variant="contained" color="primary">Submit</Button>
            </form>
            
        );
    }
};

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
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
    { load: SHELF_FORM_LOAD } // bind account loading action creator
  )(ShelfForm)

  export default ShelfForm;