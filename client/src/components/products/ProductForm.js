import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import DatePicker from "react-datepicker"
import SelectedDate from './DatePicker'
import Button from '@material-ui/core/button'

import "react-datepicker/dist/react-datepicker.css"
import { withStyles, createStyles } from '@material-ui/core'

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
                <input 
                    style={{
                        backgroundColor: "#D7F9FA"
                    }} 
                    {...input} 
                    autoComplete="off"
                />
                {this.renderError(meta)}
            </div>
        );
    }
    
    renderTextField = ({ input, label, meta }) => {
        const { classes } = this.props;
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <textarea style={{
                     backgroundColor: "#D7F9FA"
                    }}  
                    {...input} 
                />
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
                    <select 
                        style={{
                            backgroundColor: "#D7F9FA"
                        }}
                    >
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

    renderExpireDate = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <SelectedDate/>
                {this.renderError(meta)}
            </div>
        );
    }

    renderPurchaseDate = ({ input, label, meta }) => {
        const { classes } = this.props;
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <SelectedDate/>
                {this.renderError(meta)}
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
                <Field name="date" component={this.renderExpireDate} label="Expiration Date" />
                <Field name="date" component={this.renderPurchaseDate} label="Purchase Date" />
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

const styles = () =>
  createStyles({
    // backgroundColor: {
    //   backgroundColor: ''#D7F9FA''
    // },
    // shelfStyle: {
    //    '&:hover': {
    //        cursor: "pointer",

    //    },
    //    fontSize: 14,     
    // }
    inputStyle: {
            background: '#D7F9FA',
    }
    
  });

// input[type="search"] {    
//     background-color :rgb(105, 103, 116);
//     border:0px;
//     border-bottom:1px solid #ccc;
//    }

// export default connect()(reduxForm({   This format will work to connect
//     form: 'shelfCreate',
//     validate
// })(ShelfCreate));

export default (reduxForm({
    form: 'shelfForm',
    validate
})(withStyles(styles)(ShelfForm)));

