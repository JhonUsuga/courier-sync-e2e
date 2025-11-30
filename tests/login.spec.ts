import { test, expect } from '@playwright/test';

test.describe('Inicio de sesión CourierSync', () => {

  test('Login exitoso como administrador', async ({ page }) => {
    await page.goto('/'); // usa baseURL del config

    await page.getByPlaceholder('Correo electrónico').fill('admin@demo.com');
    await page.getByPlaceholder('Contraseña').fill('cualquier'); // según tu requisito
    await page.getByRole('button', { name: /iniciar sesión/i }).click();

    // Aserción: por ejemplo que vea el panel admin
    await expect(page.getByText(/panel administrador/i)).toBeVisible();
  });

  test('Login exitoso como cliente', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Correo electrónico').fill('cliente@demo.com');
    await page.getByPlaceholder('Contraseña').fill('loquesea');
    await page.getByRole('button', { name: /iniciar sesión/i }).click();

    await expect(page.getByText(/panel cliente/i)).toBeVisible();
  });

  test('Login fallido muestra mensaje de error', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Correo electrónico').fill('cliente@demo.com');
    await page.getByPlaceholder('Contraseña').fill('contraseña-incorrecta');
    await page.getByRole('button', { name: /iniciar sesión/i }).click();

    await expect(page.getByText(/credenciales inválidas/i)).toBeVisible();
  });
});
