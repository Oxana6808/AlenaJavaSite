import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Указываем правильное имя файла
import { appConfig } from './app/app.config';  // Импортируем конфигурацию приложения
import { MatSidenavModule } from '@angular/material/sidenav';
import 'prismjs';
import 'prismjs/components/prism-java.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';



bootstrapApplication(AppComponent, {
  ...appConfig,  // Разворачиваем конфигурацию из appConfig
  providers: [
    provideRouter(routes),  // Подключаем маршруты здесь
    ...(appConfig.providers || [])  // Подключаем провайдеры из appConfig, если они есть
  ]
}).catch(err => console.error(err));
