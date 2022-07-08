import { Component, OnInit } from "@angular/core";
import { HttpClientService, Employee } from "../../../service/httpclient.service";
import { Router } from '@angular/router';
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { DialogoResultadoComponent } from "../../dialogo-resultado/dialogo-resultado.component";

@Component({
  selector: "app-add-plan",
  templateUrl: "./add-plan.component.html",
  styleUrls: ["./add-plan.component.css"]
})
export class AddPlanComponent implements OnInit {
  data: {[k: string]: any} = {}; 
  // modalidades = new FormControl('');
  // modalidadesList: [];
  localizaciones = new FormControl('');
  localizacionEntregaList: [];
  clientes = new FormControl('');
  clientesList: [];
  productos = new FormControl('');
  productosList: [];
  constructor(private httpClientService: HttpClientService, public dialogo: MatDialog,
    private router: Router) {}

  ngOnInit() {
    this.getLocalizacionEntrega();
    this.getCliente();
    this.getProducto();
  }

  create(): void {
    this.httpClientService.createPlan(this.data).subscribe(data => {
      this.dialogo
        .open(DialogoResultadoComponent, {
          data: `Registro almacenado satisfactoriamente.`
        })
        .afterClosed()
        .subscribe(() => {
          this.router.navigate(['../plan'])
        });      
    });
  }

  getLocalizacionEntrega(): void {
    this.httpClientService
      .getLocalizacionEntrega()
      .subscribe(response => {
        this.localizacionEntregaList = response;
        });
  }

  getCliente(): void {
    this.httpClientService
      .getCliente()
      .subscribe(response => {
        this.clientesList = response;
        });
  }

  getProducto(): void {
    this.httpClientService
      .getProducto()
      .subscribe(response => {
        this.productosList = response;
        });
  }

  onChangeLE(ob: any) {
    this.data.idLocalizacionEntrega = ob.value;
    console.log(this.data.idLocalizacionEntrega);
  }

  onChangeC(ob: any) {
    this.data.idCliente = ob.value;
    console.log(this.data.idCliente);
  }

  onChangeP(ob: any) {
    this.data.idProducto = ob.value;
    console.log(this.data.idProducto);
  }
}
