import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { LocalizacionEntregaComponent } from './components/localizacionEntrada/list/localizacionEntrega.component';
import { PlanComponent } from './components/plan/list/plan.component';
import { AddLocalizacionEntradaComponent } from './components/localizacionEntrada/add/add-localizacionEntrada.component';
import { AddPlanComponent } from './components/plan/add/add-plan.component';
import { EditLocalizacionEntradaComponent } from './components/localizacionEntrada/edit/edit-localizacionEntrada.component';

const routes: Routes = [
  { path: '', component: PlanComponent,canActivate:[AuthGaurdService] },
  { path: 'addemployee', component: AddEmployeeComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'localizacionEntrega', component: LocalizacionEntregaComponent,canActivate:[AuthGaurdService] },
  { path: 'add-localizacionEntrega', component: AddLocalizacionEntradaComponent,canActivate:[AuthGaurdService] },
  { path: 'edit-localizacionEntrega/:id', component: EditLocalizacionEntradaComponent,canActivate:[AuthGaurdService] },
  { path: 'plan', component: PlanComponent,canActivate:[AuthGaurdService] },
  { path: 'add-plan', component: AddPlanComponent,canActivate:[AuthGaurdService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
