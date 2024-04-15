import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      {
        path: 'dashboard',
        component: DashboardPageComponent,
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedTo(['admin', 'login  ']) }
      },
      {
        path: 'create',
        component: CreatePageComponent,
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedTo(['admin', 'login  ']) }
      },
      {
        path: 'edit/:id',
        component: EditPageComponent,
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedTo(['admin', 'login  ']) }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }