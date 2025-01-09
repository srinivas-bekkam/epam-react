import React from 'react'
import {useField} from 'formik'
import { Input } from '@mui/material'
export default function InputText(props){
    const [field,meta,helpers ]=useField(props)
    return (<div className="form-group">
    <label htmlFor={props.name}>{props.label}</label>
    <Input type="text" {...field} {...props}></Input>
    <span className='error-text'>{meta.touched && meta.error?meta.error:null}</span>
    </div>)


 }