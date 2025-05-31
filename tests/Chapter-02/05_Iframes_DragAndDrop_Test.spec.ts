import { test, expect } from '@playwright/test';

test('Handling Iframes, Drag and Drop in playwright', async ({ page }) => {
  await page.goto('https://jqueryui.com/droppable/');

  const iframe = page.frameLocator('[class="demo-frame"]');
  const dragElement = iframe.locator('[id="draggable"]');
  const dropElement = iframe.locator('[id="droppable"]');

  await dragElement.dragTo(dropElement);

});