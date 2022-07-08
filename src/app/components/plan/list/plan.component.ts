import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientService } from "../../../service/httpclient.service";
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

//declare function paginatorCustom(): any;

@Component({
  selector: "app-plan",
  templateUrl: "./plan.component.html",
  styleUrls: ["./plan.component.css"]
})
export class PlanComponent implements OnInit {
  
  displayedColumns = ['Id','Cliente','NumeroGuia','Cantidad','PrecioEnvio', 'FechaEntrega', 'Acciones' ]
  dataSource: MatTableDataSource<any>;
  data: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private httpClientService: HttpClientService, public dialogo: MatDialog) {

  }

  ngOnInit() {
    this.httpClientService
      .getPlan()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response) {
    this.dataSource = new MatTableDataSource(response);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  update(id: number, data:any): void {
    this.httpClientService.updateLocalizacionEntrega(id, data).subscribe(data => {
      this.data = this.data.filter(u => u !== id);
      this.dataSource = new MatTableDataSource(this.data);
    });
  }

  delete(obj: any, i: number): void {
      this.dialogo
        .open(DialogoConfirmacionComponent, {
          data: `¿Está seguro que desea eliminar el registro?`
        })
        .afterClosed()
        .subscribe((confirmado: Boolean) => {
          if (confirmado) {
            this.httpClientService.deleteLocalizacionEntrega(obj.idLocalizacionEntrega).subscribe(data => {
              let index: number = i;
              this.dataSource.data = [...this.dataSource.data.slice(0, index), ...this.dataSource.data.slice(index + 1)];
            });
          } else {
            console.log("Selección NO")
          }
        });
    }

    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }

    
    
}
