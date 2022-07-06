import { Component, OnInit } from "@angular/core";
import { HttpClientService, Employee } from "../../../service/httpclient.service";
import { Router } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { DialogoResultadoComponent } from "../../dialogo-resultado/dialogo-resultado.component";

@Component({
  selector: "app-add-localizacionEntrada",
  templateUrl: "./add-localizacionEntrada.component.html",
  styleUrls: ["./add-localizacionEntrada.component.css"]
})
export class AddLocalizacionEntradaComponent implements OnInit {
  data: {[k: string]: any} = {}; 
  modalidades = new FormControl('');
  modalidadesList: [];
  constructor(private httpClientService: HttpClientService, public dialogo: MatDialog,
    private router: Router) {}

  ngOnInit() {
    this.getModalidad();
  }

  create(): void {
    this.httpClientService.createLocalizacionEntrega(this.data).subscribe(data => {
      this.dialogo
        .open(DialogoResultadoComponent, {
          data: `Registro almacenado satisfactoriamente.`
        })
        .afterClosed()
        .subscribe(() => {
          this.router.navigate(['../localizacionEntrega'])
        });      
    });
  }

  getModalidad(): void {
    this.httpClientService
      .getModalidad()
      .subscribe(response => {
        this.modalidadesList = response;
        //this.modalidades = response.data;
        console.log("----this.modalidades----"+JSON.stringify(this.modalidades))
        });
  }

  onChange(ob: any) {
    console.log('Book changed...');
    this.data.idModalidad = ob.value;
    console.log(this.data.idModalidad);
  }
}
