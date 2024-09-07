import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import {MenuComponent} from "./menu/menu.component";
import {HeaderComponent} from "./header/header.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {AppRoutingModule } from './app-routing.module';
import {ContentComponent} from "./content/content.component";
import {Subcontent1Component} from "./content/subcontent1/subcontent1.component";
import {RouterModule } from '@angular/router'; // Импорт RouterModule
import { Component } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    Subcontent1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,  // Модуль маршрутизации приложения
    RouterModule, // Добавьте этот импорт
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
