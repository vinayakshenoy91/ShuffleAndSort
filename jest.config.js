module.exports = {
    verbose: false,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'logic.js'
    ],
    testMatch: ['**/logic.js'],
    coverageReporters: ['json-summary', 'text-summary', 'json', 'html', 'text', 'cobertura', 'lcov'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
};
