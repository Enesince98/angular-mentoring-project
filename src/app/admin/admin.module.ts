import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePageComponent } from './create-page/create-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    CreatePageComponent,
    DashboardPageComponent,
    EditPageComponent,
    LoginPageComponent,
    AdminLayoutComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
