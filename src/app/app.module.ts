import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountingComponent } from './components/counting/counting.component';
import { LabspaceComponent } from './labspace/labspace.component';
import { Lab4Component } from './labspace/lab4/lab4.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './components/navbar/search/search.component';
import { TopbannerComponent } from './components/topbanner/topbanner.component';
import { CategorymenuComponent } from './components/categorymenu/categorymenu.component';
import { TodolistComponent } from './labspace/todolist/todolist.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductitemComponent } from './product/productlist/productitem/productitem.component';
import { PreferenceComponent } from './preference/preference.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogComponent } from './catalog/catalog.component';
import { Homework1Component } from './labspace/homework1/homework1.component';
import { ItemDirective } from './item.directive';
import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    FooterComponent,
    NavbarComponent,
    CountingComponent,
    LabspaceComponent,
    Lab4Component,
    HomeComponent,
    SearchComponent,
    TopbannerComponent,
    CategorymenuComponent,
    TodolistComponent,
    ProductComponent,
    ProductlistComponent,
    ProductitemComponent,
    PreferenceComponent,
    DashboardComponent,
    CatalogComponent,
    Homework1Component,
    ItemDirective,
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
