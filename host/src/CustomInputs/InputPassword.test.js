// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from "react";
import {
	render,
	fireEvent,
	screen,
	act,
	waitFor,
} from "@testing-library/react";
import InputPassword from "./InputPassword";
import { Form, Formik } from "formik";
import { Button } from "@mui/material";
import * as Yup from "yup";

test("shows the children when the checkbox is checked", async () => {
	const testMessage = "Test Message";
	const handleClick = jest.fn();
	render(
		<div className='login-page'>
			<Formik
				initialValues={{
					password: "",
				}}
				validationSchema={Yup.object({
					password: Yup.string().required("Password Is Required"),
				})}
				onSubmit={(values) => {
					//alert(JSON.stringify(values))
					handleClick(values);
				}}
			>
				<Form>
					<div className=' col-7'>
						<InputPassword
							name='password'
							label='Password'
							id='password'
							placeholder='admin'
						></InputPassword>
					</div>
					<div className='row col-7'>
						<Button type='submit' variant='contained' fullWidth>
							Login
						</Button>
					</div>
				</Form>
			</Formik>
		</div>
	);

	// query* functions will return the element or null if it cannot be found
	// get* functions will return the element or throw an error if it cannot be found
	const passwordInput = screen.getByLabelText(/password/i);
	const submitButton = screen.getByText(/Login/i);
	expect(passwordInput).toBeInTheDocument();
	expect(submitButton).toBeInTheDocument();
	//expect(handleClick).toHaveBeenCalledTimes(1)
	fireEvent.change(passwordInput, { target: { value: "" } });
	expect(passwordInput.value).toMatch("");
	fireEvent.click(passwordInput);
	fireEvent.blur(passwordInput);
	await waitFor(() => {
		const passwordError = screen.getByText("Password Is Required");
		expect(passwordError).toBeInTheDocument();
		fireEvent.click(submitButton);
		expect(handleClick).toHaveBeenCalledTimes(0);
	});

	fireEvent.change(passwordInput, { target: { value: "password" } });
	expect(passwordInput.value).toMatch("password");
	fireEvent.click(submitButton);
	await waitFor(() => {
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
