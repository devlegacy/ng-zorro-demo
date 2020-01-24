import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { LoginComponent } from './public/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { SiderComponent } from './common/sider/sider.component';
import { LoaderComponent } from './common/loader/loader.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HomeComponent } from './auth/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PublicGuard } from './shared/guards/public.guard';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { IconsProviderModule } from './icons-provider.module';
import { WelcomeComponent } from './admin/welcome/welcome.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    ProjectListComponent,
    SiderComponent,
    LoaderComponent,
    HomeComponent,
    NotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxWebstorageModule.forRoot(),
    IconsProviderModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }, AuthGuard, PublicGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
