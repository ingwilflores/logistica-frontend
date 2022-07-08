import { Component, OnInit } from "@angular/core";
import { HttpClientService, Employee } from "../../../service/httpclient.service";
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { DialogoResultadoComponent } from "../../dialogo-resultado/dialogo-resultado.component";

@Component({
  selector: "app-edit-plan",
  templateUrl: "./edit-plan.component.html",
  styleUrls: ["./edit-plan.component.css"]
})
export class EditPlanComponent implements OnInit {
  data: {[k: string]: any} = {};
  dataModalidad: {[k: string]: any} = {}; 
  modalidades = new FormControl('');
  modalidadesList: [];
  constructor(private httpClientService: HttpClientService, private route: ActivatedRoute, private router: Router, public dialogo: MatDialog
    ) {}
    private routeSub: Subscription;

    ngOnInit() {
      this.routeSub = this.route.params.subscribe(params => {
        this.getLocalizacionEntregaById(params['id']);
        // this.dataModalidad = this.data.idModalidad
      });
      
    }

  getLocalizacionEntregaById(id: number): void {
    this.httpClientService
      .getLocalizacionEntregaById(id)
      .subscribe(response => //this.data = response.data
        {
        this.dataModalidad = response.idModalidad;
        this.data = response;
        }
      );
  }
  // ngAfterViewInit() {
  //   this.dataModalidad = this.data.idModalidad
  // }

  update(): void {
    this.httpClientService.updateLocalizacionEntrega(this.data.idLocalizacionEntrega, this.data).subscribe(data => {
      this.dialogo
        .open(DialogoResultadoComponent, {
          data: `Registro actualizado satisfactoriamente.`
        })
        .afterClosed()
        .subscribe(() => {
          this.router.navigate(['../localizacionEntrega'])
        });      
    });
  }

  getModalidad(): void {
    console.log("----this.data.idModalidad--"+this.data.idModalidad)
    if(!!!this.modalidadesList){
      this.httpClientService
      .getModalidad()
      .subscribe(response => {
        this.modalidadesList = response;
        });
    }
  }

  onChange(ob: any) {
    console.log('Book changed...');
    this.data.idModalidad = ob.value;
    console.log(this.data.idModalidad);
  }
}
