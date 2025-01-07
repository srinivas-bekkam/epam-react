import React from 'react'
import {useField} from 'formik'
export default function InputText(props){
    const [field,meta,helpers ]=useField(props)
    return (<div className="form-group">
    <label htmlFor={props.name}>{props.label}</label>
    <input type="text" {...field} {...props}></input>
    <span className='error-text'>{meta.touched && meta.error?meta.error:null}</span>
    </div>)


 }