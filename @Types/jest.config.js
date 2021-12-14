"use strict";
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
    // All imported modules in your tests should be mocked automatically
    // automock: false,
    // Stop running tests after `n` failures
    // bail: 0,
    // The directory where Jest should store its cached dependency information
    // cacheDirectory: "/private/var/folders/z_/v03l33d55fb57nrr3b1q03ch0000gq/T/jest_dz",
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
    // Indicates whether the coverage information should be collected while executing the test
    // collectCoverage: false,
    // An array of glob patterns indicating a set of files for which coverage information should be collected
    // collectCoverageFrom: undefined,
    // The directory where Jest should output its coverage files
    // coverageDirectory: undefined,
    // An array of regexp pattern strings used to skip coverage collection
    // coveragePathIgnorePatterns: [
    //   "/node_modules/"
    // ],
    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: "v8",
    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],
    // An object that configures minimum threshold enforcement for coverage results
    // coverageThreshold: undefined,
    // A path to a custom dependency extractor
    // dependencyExtractor: undefined,
    // Make calling deprecated APIs throw helpful error messages
    // errorOnDeprecated: false,
    // Force coverage collection from ignored files using an array of glob patterns
    // forceCoverageMatch: [],
    // A path to a module which exports an async function that is triggered once before all test suites
    // globalSetup: undefined,
    // A path to a module which exports an async function that is triggered once after all test suites
    // globalTeardown: undefined,
    // A set of global variables that need to be available in all test environments
    // globals: {},
    // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
    // maxWorkers: "50%",
    // An array of directory names to be searched recursively up from the requiring module's location
    // moduleDirectories: [
    //   "node_modules"
    // ],
    // An array of file extensions your modules use
    moduleFileExtensions: ["ts", "js", "json", "node"],
    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    // moduleNameMapper: {},
    // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
    // modulePathIgnorePatterns: [],
    // Activates notifications for test results
    // notify: false,
    // An enum that specifies notification mode. Requires { notify: true }
    // notifyMode: "failure-change",
    // A preset that is used as a base for Jest's configuration
    preset: "ts-jest",
    // Run tests from one or more projects
    // projects: undefined,
    // Use this configuration option to add custom reporters to Jest
    // reporters: undefined,
    // Automatically reset mock state between every test
    // resetMocks: false,
    // Reset the module registry before running each individual test
    // resetModules: false,
    // A path to a custom resolver
    // resolver: undefined,
    // Automatically restore mock state between every test
    // restoreMocks: false,
    // The root directory that Jest should scan for tests and modules within
    // rootDir: undefined,
    // A list of paths to directories that Jest should use to search for files in
    // roots: [
    //   "<rootDir>"
    // ],
    // Allows you to use a custom runner instead of Jest's default test runner
    // runner: "jest-runner",
    // The paths to modules that run some code to configure or set up the testing environment before each test
    // setupFiles: [],
    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ["<rootDir>/setup.js"],
    // The number of seconds after which a test is considered as slow and reported as such in the results.
    // slowTestThreshold: 5,
    // A list of paths to snapshot serializer modules Jest should use for snapshot testing
    // snapshotSerializers: [],
    // The test environment that will be used for testing
    testEnvironment: "node",
    // Options that will be passed to the testEnvironment
    // testEnvironmentOptions: {},
    // Adds a location field to test results
    // testLocationInResults: false,
    // The glob patterns Jest uses to detect test files
    testMatch: [
        "**/__tests__/**/*.ts",
        "**/?(*.)+(spec|test).ts"
    ],
    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ["/node_modules/", ".d.ts", ".js"],
    // The regexp pattern or array of patterns that Jest uses to detect test files
    // testRegex: [],
    // This option allows the use of a custom results processor
    // testResultsProcessor: undefined,
    // This option allows use of a custom test runner
    // testRunner: "jest-circus/runner",
    // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
    // testURL: "http://localhost",
    // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
    // timers: "real",
    // A map from regular expressions to paths to transformers
    // transform: undefined,
    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    // transformIgnorePatterns: [
    //   "/node_modules/",
    //   "\\.pnp\\.[^\\/]+$"
    // ],
    // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
    // unmockedModulePathPatterns: undefined,
    // Indicates whether each individual test should be reported during the run
    // verbose: undefined,
    // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
    // watchPathIgnorePatterns: [],
    // Whether to use watchman for file crawling
    // watchman: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVzdC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImplc3QuY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnRUFBZ0U7QUFDaEU7OztHQUdHO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUVmLG9FQUFvRTtJQUNwRSxtQkFBbUI7SUFFbkIsd0NBQXdDO0lBQ3hDLFdBQVc7SUFFWCwwRUFBMEU7SUFDMUUsc0ZBQXNGO0lBRXRGLGtFQUFrRTtJQUNsRSxVQUFVLEVBQUUsSUFBSTtJQUVoQiwwRkFBMEY7SUFDMUYsMEJBQTBCO0lBRTFCLHlHQUF5RztJQUN6RyxrQ0FBa0M7SUFFbEMsNERBQTREO0lBQzVELGdDQUFnQztJQUVoQyxzRUFBc0U7SUFDdEUsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixLQUFLO0lBRUwsMEVBQTBFO0lBQzFFLGdCQUFnQixFQUFFLElBQUk7SUFFdEIsd0VBQXdFO0lBQ3hFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsS0FBSztJQUVMLCtFQUErRTtJQUMvRSxnQ0FBZ0M7SUFFaEMsMENBQTBDO0lBQzFDLGtDQUFrQztJQUVsQyw0REFBNEQ7SUFDNUQsNEJBQTRCO0lBRTVCLCtFQUErRTtJQUMvRSwwQkFBMEI7SUFFMUIsbUdBQW1HO0lBQ25HLDBCQUEwQjtJQUUxQixrR0FBa0c7SUFDbEcsNkJBQTZCO0lBRTdCLCtFQUErRTtJQUMvRSxlQUFlO0lBRWYsaU9BQWlPO0lBQ2pPLHFCQUFxQjtJQUVyQixpR0FBaUc7SUFDakcsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixLQUFLO0lBRUwsK0NBQStDO0lBQy9DLG9CQUFvQixFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO0lBRWxELG9JQUFvSTtJQUNwSSx3QkFBd0I7SUFFeEIsd0hBQXdIO0lBQ3hILGdDQUFnQztJQUVoQywyQ0FBMkM7SUFDM0MsaUJBQWlCO0lBRWpCLHNFQUFzRTtJQUN0RSxnQ0FBZ0M7SUFFaEMsMkRBQTJEO0lBQzNELE1BQU0sRUFBRSxTQUFTO0lBRWpCLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFFdkIsZ0VBQWdFO0lBQ2hFLHdCQUF3QjtJQUV4QixvREFBb0Q7SUFDcEQscUJBQXFCO0lBRXJCLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFFdkIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUV2QixzREFBc0Q7SUFDdEQsdUJBQXVCO0lBRXZCLHdFQUF3RTtJQUN4RSxzQkFBc0I7SUFFdEIsNkVBQTZFO0lBQzdFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsS0FBSztJQUVMLDBFQUEwRTtJQUMxRSx5QkFBeUI7SUFFekIsMEdBQTBHO0lBQzFHLGtCQUFrQjtJQUVsQiw4R0FBOEc7SUFDOUcsa0JBQWtCLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztJQUUxQyxzR0FBc0c7SUFDdEcsd0JBQXdCO0lBRXhCLHNGQUFzRjtJQUN0RiwyQkFBMkI7SUFFM0IscURBQXFEO0lBQ3JELGVBQWUsRUFBRSxNQUFNO0lBRXZCLHFEQUFxRDtJQUNyRCw4QkFBOEI7SUFFOUIsd0NBQXdDO0lBQ3hDLGdDQUFnQztJQUVoQyxtREFBbUQ7SUFDbkQsU0FBUyxFQUFFO1FBQ1Qsc0JBQXNCO1FBQ3RCLHlCQUF5QjtLQUMxQjtJQUVELHdHQUF3RztJQUN4RyxzQkFBc0IsRUFBRSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFFMUQsOEVBQThFO0lBQzlFLGlCQUFpQjtJQUVqQiwyREFBMkQ7SUFDM0QsbUNBQW1DO0lBRW5DLGlEQUFpRDtJQUNqRCxvQ0FBb0M7SUFFcEMsMEdBQTBHO0lBQzFHLCtCQUErQjtJQUUvQixnR0FBZ0c7SUFDaEcsa0JBQWtCO0lBRWxCLDBEQUEwRDtJQUMxRCx3QkFBd0I7SUFFeEIsNEhBQTRIO0lBQzVILDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLEtBQUs7SUFFTCw2SUFBNkk7SUFDN0kseUNBQXlDO0lBRXpDLDJFQUEyRTtJQUMzRSxzQkFBc0I7SUFFdEIsbUhBQW1IO0lBQ25ILCtCQUErQjtJQUUvQiw0Q0FBNEM7SUFDNUMsa0JBQWtCO0NBQ25CLENBQUMifQ==