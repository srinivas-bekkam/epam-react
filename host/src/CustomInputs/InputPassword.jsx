import React from "react";
import { useField } from "formik";
import { Input } from "@mui/material";
export default function InputPassword(props) {
	const [field, meta] = useField(props);
	return (
		<div className='form-group'>
			<label htmlFor={props.name}>{props.label}</label>
			<Input type='password' {...field} {...props}></Input>
			<span className='error-text'>
				{meta.touched && meta.error ? meta.error : null}
			</span>
		</div>
	);

	// return (
	//     <div>
	//     <div data-mdb-input-init class="form-outline mb-4">
	//     <label class="form-label" for={props.name}>{props.label}</label>
	//     <input type="password"  {...field} {...props} class="form-control" />
	//   </div>
	//   </div>
	// )
}
