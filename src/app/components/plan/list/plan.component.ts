import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientService } from "../../../service/httpclient.service";

@Component({
  selector: "app-plan",
  templateUrl: "./plan.component.html",
  styleUrls: ["./plan.component.css"]
})
export class PlanComponent implements OnInit {
  
  data: any;
  // displayedColumns: string[] = ["name", "designation", "nombre", "descripcion", "acciones"];

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.httpClientService
      .getPlan()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response) {
    this.data = response;
  }

  update(id: number, data:any): void {
    this.httpClientService.updateLocalizacionEntrega(id, data).subscribe(data => {
      this.data = this.data.filter(u => u !== id);
    });
  }

  // deleteEmployee(employee: Employee): void {
  //   // this.httpClientService.deleteEmployee(employee).subscribe(data => {
  //   //   this.data = this.data.filter(u => u !== employee);
  //   // });
  // }

}
