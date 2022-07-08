import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
// import { AuthenticationService } from "./authentication.service";

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  token: any;
  constructor(private httpClient: HttpClient
    // , private authService: AuthenticationService
    ) {
    // this.token = this.authService.getAuthorizationHeaderValue();
    // console.log("----token---"+this.token)
  }

  getEmployees() {
    return this.httpClient.get<Employee[]>(environment.REST_API + "employees");
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>(
      environment.REST_API + "employees" + "/" + employee.empId
    );
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>(
      environment.REST_API + "employees",
      employee
    );
  }

  public getLocalizacionEntrega() {
    return this.httpClient.get<any>(environment.REST_API + "api/localizacionEntrega");
  }

  public getLocalizacionEntregaById(id: number) {
    return this.httpClient.get<any>(environment.REST_API + "api/localizacionEntrega/"+id);
  }

  public updateLocalizacionEntrega(id: number, data: any) {
    return this.httpClient.put<any>(
      environment.REST_API + "api/localizacionEntrega/" + id, data
    );
  }

  public deleteLocalizacionEntrega(id: number) {
    return this.httpClient.delete<any>(
      environment.REST_API + "api/localizacionEntrega/" + id
    );
  }

  public createLocalizacionEntrega(data:any) {
    console.log("----data send----"+JSON.stringify(data))
    return this.httpClient.post<any>(
      environment.REST_API + "api/localizacionEntrega",
      data
    );
  }

  public getModalidad() {
    return this.httpClient.get<any>(environment.REST_API + "api/modalidad");
  }

  public getPlan() {
    return this.httpClient.get<any>(environment.REST_API + "api/plan");
  }

  public getPlanById(id: number) {
    return this.httpClient.get<any>(environment.REST_API + "api/plan/"+id);
  }

  public updatePlan(id: number, data: any) {
    return this.httpClient.put<any>(
      environment.REST_API + "api/plan/" + id, data
    );
  }

  public deletePlan(id: number) {
    return this.httpClient.delete<any>(
      environment.REST_API + "api/plan/" + id
    );
  }

  public createPlan(data:any) {
    console.log("----data send----"+JSON.stringify(data))
    return this.httpClient.post<any>(
      environment.REST_API + "api/plan",
      data
    );
  }

  public getCliente() {
    return this.httpClient.get<any>(environment.REST_API + "api/cliente");
  }

  public getClienteById(id: number) {
    return this.httpClient.get<any>(environment.REST_API + "api/cliente/"+id);
  }

  public updateCliente(id: number, data: any) {
    return this.httpClient.put<any>(
      environment.REST_API + "api/cliente/" + id, data
    );
  }

  public deleteCliente(id: number) {
    return this.httpClient.delete<any>(
      environment.REST_API + "api/cliente/" + id
    );
  }

  public createCliente(data:any) {
    console.log("----data send----"+JSON.stringify(data))
    return this.httpClient.post<any>(
      environment.REST_API + "api/cliente",
      data
    );
  }

  public getProducto() {
    return this.httpClient.get<any>(environment.REST_API + "api/producto");
  }

  public getProductoById(id: number) {
    return this.httpClient.get<any>(environment.REST_API + "api/producto/"+id);
  }

  public updateProducto(id: number, data: any) {
    return this.httpClient.put<any>(
      environment.REST_API + "api/producto/" + id, data
    );
  }

  public deleteProducto(id: number) {
    return this.httpClient.delete<any>(
      environment.REST_API + "api/producto/" + id
    );
  }

  public createProducto(data:any) {
    console.log("----data send----"+JSON.stringify(data))
    return this.httpClient.post<any>(
      environment.REST_API + "api/producto",
      data
    );
  }
}
