import React from 'react'
import { Field, reduxForm } from 'redux-form'

class ShelfForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }
    
    renderTextField = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <textarea {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    renderIconMenu = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <div className="ui left icon input">
                    <label className="ui dropdown item">{label}</label>
                    <select>
                        <option>
                            <i class="chess icon"></i>
                        </option>
                        <i class="chess icon"></i>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                    </select>
                    {this.renderError(meta)}
                </div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="name" component={this.renderInput} label="Give it a Name" />
                <Field name="opinion" component={this.renderTextField}  label="What are your Thoughts?" />
                <Field name="icon" component={this.renderIconMenu} label="Choose an Icon" />
                <button className="ui button primary">Submit</button>
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

export default (reduxForm({
    form: 'shelfForm',
    validate
})(ShelfForm));

