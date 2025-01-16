module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{js}"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	testEnvironmentOptions: {
		customExportConditions: [""],
	},
	setupFilesAfterEnv: ["<rootDir>/setUpTests.js"],
};
