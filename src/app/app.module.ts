import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-interceptor.service';
import { LocalizacionEntregaComponent } from './components/localizacionEntrada/list/localizacionEntrega.component';
import { PlanComponent } from './components/plan/list/plan.component';
import { AddLocalizacionEntradaComponent } from './components/localizacionEntrada/add/add-localizacionEntrada.component';
import { AddPlanComponent } from './components/plan/add/add-plan.component';
import { EditLocalizacionEntradaComponent } from './components/localizacionEntrada/edit/edit-localizacionEntrada.component';
import { DialogoConfirmacionComponent } from './components/dialogo-confirmacion/dialogo-confirmacion.component';
import { DialogoResultadoComponent } from './components/dialogo-resultado/dialogo-resultado.component';

// import { MatButtonModule  } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DialogoConfirmacionComponent,
    DialogoResultadoComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    LocalizacionEntregaComponent,
    PlanComponent,
    AddLocalizacionEntradaComponent,
    AddPlanComponent,
    EditLocalizacionEntradaComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
