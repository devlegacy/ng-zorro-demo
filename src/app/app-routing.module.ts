import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './auth/home/home.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { PublicGuard } from './shared/guards/public.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { NotFoundComponent } from './common/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [PublicGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects',
    component: ProjectListComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'**',
    component: NotFoundComponent
  }
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
