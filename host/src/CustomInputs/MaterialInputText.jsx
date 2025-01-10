import React from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";
export default function MaterialInputText(props) {
	const [field, meta, helpers] = useField(props);
	//     return (<div className="form-group">
	//     <label htmlFor={props.name}>{props.label}</label>
	//     <input type="text" {...field} {...props}></input>
	//     <span >{meta.touched && meta.error?meta.error:null}</span>
	//     </div>)

	return (
		<>
			<TextField
				fullWidth
				id='email'
				name='email'
				label='Email'
				{...field}
				{...props}
				error={meta.touched && Boolean(meta.error)}
				helperText={meta.touched && meta.error}
			/>
		</>
	);
}
