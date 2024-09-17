import { Routes } from '@angular/router';

import { Subcontent1Component } from './content/subcontent1/subcontent1.component';
import { Subcontent1p1Component } from './content/subcontent1p1/subcontent1p1.component';  // Импортируем новый подкомпонент
import { Subcontent1p2Component } from './content/subcontent1p2/subcontent1p2.component';  // Импортируем новый подкомпонент
import { Subcontent1p3Component } from './content/subcontent1p3/subcontent1p3.component';  // Импортируем новый подкомпонент
import { Subcontent1p4Component } from './content/subcontent1p4/subcontent1p4.component';  // Импортируем новый подкомпонент
import { Subcontent1p5Component } from './content/subcontent1p5/subcontent1p5.component';  // Импортируем новый подкомпонент

import { Subcontent2Component } from './content/subcontent2/subcontent2.component';
import { Subcontent2p1Component } from './content/subcontent2p1/subcontent2p1.component';  // Импортируем новые компоненты
import { Subcontent2p2Component } from './content/subcontent2p2/subcontent2p2.component';
import { Subcontent2p3Component } from './content/subcontent2p3/subcontent2p3.component';
import { Subcontent2p4Component } from './content/subcontent2p4/subcontent2p4.component';
import { Subcontent2p5Component } from './content/subcontent2p5/subcontent2p5.component';
import { Subcontent2p6Component } from './content/subcontent2p6/subcontent2p6.component';

import { Subcontent3Component } from './content/subcontent3/subcontent3.component';  // Импортируем новый подкомпонент
import { Subcontent3p1Component } from './content/subcontent3p1/subcontent3p1.component';  // Импортируем новые компоненты
import { Subcontent3p2Component } from './content/subcontent3p2/subcontent3p2.component';
import { Subcontent3p3Component } from './content/subcontent3p3/subcontent3p3.component';
import { Subcontent3p4Component } from './content/subcontent3p4/subcontent3p4.component';
import { Subcontent3p5Component } from './content/subcontent3p5/subcontent3p5.component';
import { Subcontent3p6Component } from './content/subcontent3p6/subcontent3p6.component';
import { Subcontent3p7Component } from './content/subcontent3p7/subcontent3p7.component';
import { Subcontent3p8Component } from './content/subcontent3p8/subcontent3p8.component';

import { Subcontent4Component } from './content/subcontent4/subcontent4.component';  // Импортируем новый подкомпонент
import { Subcontent4p1Component } from './content/subcontent4p1/subcontent4p1.component';  // Импортируем новые компоненты
import { Subcontent4p2Component } from './content/subcontent4p2/subcontent4p2.component';
import { Subcontent4p3Component } from './content/subcontent4p3/subcontent4p3.component';
import { Subcontent4p4Component } from './content/subcontent4p4/subcontent4p4.component';
import { Subcontent4p5Component } from './content/subcontent4p5/subcontent4p5.component';
import { Subcontent4p6Component } from './content/subcontent4p6/subcontent4p6.component';
import { Subcontent4p7Component } from './content/subcontent4p7/subcontent4p7.component';
import { Subcontent4p8Component } from './content/subcontent4p8/subcontent4p8.component';
import { Subcontent4p9Component } from './content/subcontent4p9/subcontent4p9.component';
import { Subcontent4p10Component } from './content/subcontent4p10/subcontent4p10.component';
import { Subcontent4p11Component } from './content/subcontent4p11/subcontent4p11.component';


export const routes: Routes = [
  { path: 'subcontent1', component: Subcontent1Component },  // Маршрут для первого подкомпонента
  { path: 'subcontent1p1', component: Subcontent1p1Component },  // Маршрут для четвёртого подкомпонента
  { path: 'subcontent1p2', component: Subcontent1p2Component },  // Маршрут для четвёртого подкомпонента
  { path: 'subcontent1p3', component: Subcontent1p3Component },  // Маршрут для четвёртого подкомпонента
  { path: 'subcontent1p4', component: Subcontent1p4Component },  // Маршрут для четвёртого подкомпонента
  { path: 'subcontent1p5', component: Subcontent1p5Component },  // Маршрут для четвёртого подкомпонента


  { path: 'subcontent2', component: Subcontent2Component },  // Маршрут для второго подкомпонента
  { path: 'subcontent2p1', component: Subcontent2p1Component },  // Маршруты для подразделов
  { path: 'subcontent2p2', component: Subcontent2p2Component },
  { path: 'subcontent2p3', component: Subcontent2p3Component },
  { path: 'subcontent2p4', component: Subcontent2p4Component },
  { path: 'subcontent2p5', component: Subcontent2p5Component },
  { path: 'subcontent2p6', component: Subcontent2p6Component },

  { path: 'subcontent3', component: Subcontent3Component },  // Маршрут для третьего подкомпонента
  { path: 'subcontent3p1', component: Subcontent3p1Component },  // Маршруты для подразделов
  { path: 'subcontent3p2', component: Subcontent3p2Component },
  { path: 'subcontent3p3', component: Subcontent3p3Component },
  { path: 'subcontent3p4', component: Subcontent3p4Component },
  { path: 'subcontent3p5', component: Subcontent3p5Component },
  { path: 'subcontent3p6', component: Subcontent3p6Component },
  { path: 'subcontent3p7', component: Subcontent3p7Component },
  { path: 'subcontent3p8', component: Subcontent3p8Component },

  { path: 'subcontent4', component: Subcontent4Component },  // Маршрут для четвёртого подкомпонента
  { path: 'subcontent4p1', component: Subcontent4p1Component },  // Маршруты для подразделов
  { path: 'subcontent4p2', component: Subcontent4p2Component },
  { path: 'subcontent4p3', component: Subcontent4p3Component },
  { path: 'subcontent4p4', component: Subcontent4p4Component },
  { path: 'subcontent4p5', component: Subcontent4p5Component },
  { path: 'subcontent4p6', component: Subcontent4p6Component },
  { path: 'subcontent4p7', component: Subcontent4p7Component },
  { path: 'subcontent4p8', component: Subcontent4p8Component },
  { path: 'subcontent4p9', component: Subcontent4p9Component },
  { path: 'subcontent4p10', component: Subcontent4p10Component },
  { path: 'subcontent4p11', component: Subcontent4p11Component },

  { path: '', redirectTo: '/subcontent1', pathMatch: 'full' }  // Редирект на subcomponent1 по умолчанию
];
