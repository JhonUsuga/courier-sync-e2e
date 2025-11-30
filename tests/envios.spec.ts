import { test, expect } from '@playwright/test';

test.describe('Gestión de envíos', () => {

  test('Cliente crea un nuevo envío', async ({ page }) => {
    // 1. Login como cliente
    await page.goto('/');
    await page.getByPlaceholder('Correo electrónico').fill('cliente@demo.com');
    await page.getByPlaceholder('Contraseña').fill('algo');
    await page.getByRole('button', { name: /iniciar sesión/i }).click();

    // 2. Navega a la sección de crear envío
    await page.getByRole('link', { name: /nuevo envío/i }).click();

    // 3. Llena formulario básico (ajusta campos reales)
    await page.getByLabel(/origen/i).fill('Medellín');
    await page.getByLabel(/destino/i).fill('Bogotá');
    await page.getByLabel(/peso/i).fill('10');
    await page.getByRole('button', { name: /crear envío/i }).click();

    // 4. Validación: aparece en el listado con estado "Registrado"
    await expect(page.getByText(/registrado/i)).toBeVisible();
  });
});
