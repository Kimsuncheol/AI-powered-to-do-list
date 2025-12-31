import { test, expect } from '@playwright/test';

/**
 * These tests assume the user is already signed in.
 * In a real scenario, we would use a global setup for auth or handle it here.
 * For this "mission", I will implement the tests and then use the browser_subagent
 * to manually sign in and run them or verify the functionality.
 */

test.describe('Task Management', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to base URL
    await page.goto('/');
  });

  test('Manual Task Creation', async ({ page }) => {
    // Go to New Task page
    await page.click('text=New Task'); // Assuming there is a "New Task" button/link on home
    await expect(page).toHaveURL('/tasks/new');

    // Select Manual tab (should be default but just in case)
    await page.click('text=Manual');

    // Fill the form
    await page.fill('input[name="title"]', 'Test Manual Task');
    await page.fill('textarea[name="description"]', 'This is a description for a manual task.');
    
    // Submit
    await page.click('button:has-text("Create Task")');

    // Verify success message or redirect
    await expect(page.locator('text=Task created successfully')).toBeVisible();
    
    // Check if it appears in the list (if redirected)
    await page.click('text=View Tasks');
    await expect(page).toHaveURL('/');
    await expect(page.locator('text=Test Manual Task')).toBeVisible();
  });

  test('AI Task Creation', async ({ page }) => {
    await page.goto('/tasks/new');
    
    // Select AI Assistant tab
    await page.click('text=AI Assistant');

    // Describe the task
    await page.fill('textarea[placeholder*="Describe what you need to do"]', 'Plan a weekend trip to Jeju island');
    
    // Generate
    await page.click('button:has-text("Create with AI")');

    // Wait for AI processing (might take some time)
    await expect(page.locator('text=Task created successfully')).toBeVisible({ timeout: 30000 });
    
    // Verify
    await page.click('text=View Tasks');
    await expect(page.locator('text=Plan a weekend trip to Jeju island')).toBeVisible();
  });

  test('Task Details and Subtasks', async ({ page }) => {
    // Find an existing task and click it (assuming the list has clickable tasks)
    // For testing stability, we might want to create one first, but let's assume we can find one.
    const taskLink = page.locator('text=Test Manual Task').first();
    await taskLink.click();

    // Verify detail page elements
    await expect(page.locator('h4')).toContainText('Test Manual Task');
    await expect(page.locator('text=This is a description for a manual task.')).toBeVisible();

    // Test AI Subtask Generation
    await page.click('button:has-text("Generate Subtasks")');
    
    // Wait for AI (timeout increased)
    await expect(page.locator('text=Generating subtasks...')).not.toBeVisible({ timeout: 30000 });
    
    // Verify some subtasks appeared
    const subtasks = page.locator('li.MuiListItem-root');
    await expect(subtasks).toHaveCount({ min: 1 });

    // Toggle a subtask
    const firstSubtaskCheckbox = page.locator('input[type="checkbox"]').first();
    const isCheckedBefore = await firstSubtaskCheckbox.isChecked();
    await firstSubtaskCheckbox.click();
    
    // Brief wait for state update
    await page.waitForTimeout(500);
    expect(await firstSubtaskCheckbox.isChecked()).not.toBe(isCheckedBefore);
  });
});
