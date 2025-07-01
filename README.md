# Playwright Registration & Email Verification Example (Tigrmail)

This project demonstrates how to write an end-to-end (E2E) registration and email verification test using [Playwright](https://playwright.dev/) and [Tigrmail](https://tigrmail.com) as the email API.

## Prerequisites
- [Node.js](https://nodejs.org/) installed
- [Tigrmail](https://tigrmail.com) account (for API token)

## Setup
1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Get a Tigrmail API token**
   - Sign up or log in at [https://console.tigrmail.com](https://console.tigrmail.com)
   - Copy your API token
3. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Paste your Tigrmail API token as the value for `TIGRMAIL_TOKEN` in `.env`

## Running the test
To run the test in Playwright UI mode (for interactive debugging):
```sh
npx playwright test --ui
```

## What this example does
- Opens the signup page
- Fills in a unique email and password
- Submits the registration form
- Waits for the verification email via Tigrmail
- Extracts the verification link and completes the flow

---

For more details about Tigrmail, visit [tigrmail.com](https://tigrmail.com). 