import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { Subcontent1Component } from './content/subcontent1/subcontent1.component';

const routes: Routes = [
  {
    path: 'content', component: ContentComponent, children: [
      { path: 'subcontent1', component: Subcontent1Component }
    ]},
  { path: '', redirectTo: '/content/subcontent1', pathMatch: 'full' } // Перенаправление по умолчанию на основной контент
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
