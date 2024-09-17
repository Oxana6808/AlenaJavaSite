import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';  // Добавляем анимации

import { routes } from './app.routes';  // Импортируем маршруты

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),  // Включаем оптимизацию обнаружения изменений
    provideRouter(routes),  // Подключаем маршруты
    provideAnimations()  // Подключаем анимации для Angular Material и других элементов
  ]
};
