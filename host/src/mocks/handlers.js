import { rest } from "msw";

export const handlers = [
	rest.get(
		"https://jsonplaceholder.typicode.com/albums?_pages=1&_limit=10",
		(req, res, ctx) => {
			return res(
				ctx.status(200),
				ctx.json([
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
				])
			);
		}
	),
	rest.post("/api/login", (req, res, ctx) => {
		const { username } = req.body;
		if (username === "testuser") {
			return res(ctx.status(200), ctx.json({ message: "Login successful" }));
		}
		return res(ctx.status(401), ctx.json({ error: "Unauthorized" }));
	}),
];
