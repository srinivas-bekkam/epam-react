import "@testing-library/jest-dom";

import { server } from "./src/mocks/server";
import {} from "./src";
// Start and close the server for tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
