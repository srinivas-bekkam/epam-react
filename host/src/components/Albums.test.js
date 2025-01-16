import "@testing-library/jest-dom";
import * as React from "react";
import {
	render,
	fireEvent,
	screen,
	act,
	waitFor,
} from "@testing-library/react";
import Albums from "./Albums";

test("Albums Testing", async () => {
	render(<Albums></Albums>);

	// query* functions will return the element or null if it cannot be found
	// get* functions will return the element or throw an error if it cannot be found
	// const passwordInput = screen.getByLabelText(/password/i);
	// const submitButton = screen.getByText(/Login/i);
	// expect(passwordInput).toBeInTheDocument();
	// expect(submitButton).toBeInTheDocument();
	// //expect(handleClick).toHaveBeenCalledTimes(1)
	// fireEvent.change(passwordInput, { target: { value: "" } });
	// expect(passwordInput.value).toMatch("");
	// fireEvent.click(passwordInput);
	// fireEvent.blur(passwordInput);
	await waitFor(() => {
		const passwordError = screen.getByText("quidem molestiae enim");
		expect(passwordError).toBeInTheDocument();
		// fireEvent.click(submitButton);
		// expect(handleClick).toHaveBeenCalledTimes(0);
	});
});
