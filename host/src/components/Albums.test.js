import { render, screen, waitFor } from "@testing-library/react";
import nock from "nock";
import Albums from "./Albums";
import * as React from "react";
import { Provider } from "react-redux";
import { store } from "../reduxstore/store";

describe("expectedData", () => {
	it("checks if returned data from API rendered into component", async () => {
		nock("https://jsonplaceholder.typicode.com")
			.defaultReplyHeaders({
				"access-control-allow-origin": "*",
			})
			.get("/albums?_pages=1&_limit=10")
			.reply(200, [
				{
					userId: 1,
					id: 1,
					title: "quidem molestiae enim",
				},
				{
					userId: 1,
					id: 2,
					title: "sunt qui excepturi placeat culpa",
				},
			]);

		render(
			<Provider store={store}>
				<Albums />
			</Provider>
		);

		await waitFor(() => {
			expect(
				screen.getByText("sunt qui excepturi placeat culpa")
			).toBeInTheDocument();
		});
	});
});
