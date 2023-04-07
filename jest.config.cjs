module.exports = {
    collectCoverageFrom: ["src/**/*.{ts,tsx}"],
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: ["index.ts"],
    moduleFileExtensions: ["js", "jsx", "node", "ts", "tsx"],
    testRegex: "src/.*\\.spec\\.(jsx?|tsx?)$",
    roots: ["src"],
    transform: {
        "^.+\\.[jt]sx?$": [
            "@swc/jest",
            {
                jsc: {
                    parser: {
                        syntax: "typescript",
                    },
                },
            },
        ],
    },
    testEnvironmentOptions: { url: "http://localhost/" },
};
