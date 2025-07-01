import { test, expect } from '@playwright/test';
import { Tigrmail } from 'tigrmail';
import * as dotenv from 'dotenv';
import * as cheerio from 'cheerio'; // you can use anything for parsing your mails, we use cheerio as an example

function extractFirstLink(html: string): string | null {
  const $ = cheerio.load(html);
  const firstHref = $('a').first().attr('href');
  return firstHref ?? null;
}

dotenv.config();

// Step 2: Get API token at https://console.tigrmail.com and paste it here.
const TIGRMAIL_TOKEN = process.env.TIGRMAIL_TOKEN; // <-- Loaded from .env

// This test demonstrates a sign up and email verification flow for https://sandbox.tigrmail.com
// It uses only data-testid selectors for reliability and clarity.
test('user can sign up and verify email', async ({ page }) => {
  if (!TIGRMAIL_TOKEN) {
    throw new Error('Set TIGRMAIL_TOKEN in .env');
  }

  // Step 3: Generate an inbox (unique email address for this test)
  const tigr = new Tigrmail({ token: TIGRMAIL_TOKEN });
  const emailAddress = await tigr.createEmailAddress();

  // Go to the sign up page directly
  await page.goto('/sign-up');

  // Fill in the email field
  await page.getByTestId('email-input').fill(emailAddress);

  // Fill in the password field
  await page.getByTestId('password-input').fill('TestPassword123!');

  // Fill in the confirm password field
  await page.getByTestId('password-confirm-input').fill('TestPassword123!');

  // Click the sign up button
  await page.getByTestId('submit-btn').click();

  // Wait for the verification prompt to appear (replace the URL check)
  await expect(page.getByTestId('verification-status')).toHaveText('Your email is not verified. Please check your inbox for the verification email.');

  // Step 5: Poll for the next message (wait for verification email)
  const message = await tigr.pollNextMessage({ inbox: emailAddress });

  // Step 6: Extract the verification link from the first <a> tag's href in the email body
  const verificationLink = extractFirstLink(message.body);
  if (!verificationLink) {
    throw new Error('No <a> tag with href found in the email body');
  }

  console.log('verificationLink', verificationLink);
  // Step 7: Open the verification link in a new tab and wait for confirmation
  await page.goto(verificationLink);
  await page.waitForSelector('text=Your email has been verified');
  await page.goBack();

  // Step 8: Return to the original tab, click recheck, and verify status
  await expect(page.getByTestId('verification-status')).toHaveText('Your email is verified!');
});