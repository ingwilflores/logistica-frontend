import { Component, OnInit } from "@angular/core";
import { Employee, HttpClientService } from "../../../service/httpclient.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-add-plan",
  templateUrl: "./add-plan.component.html",
  styleUrls: ["./add-plan.component.css"]
})
export class AddPlanComponent implements OnInit {
  user: Employee = new Employee("", "", "", "");
  //data: any
  constructor(private httpClientService: HttpClientService,
    private router: Router) {}

  ngOnInit() {}

  createEmployee(): void {
    //console.debug(this.user);
    this.httpClientService.createEmployee(this.user).subscribe(data => {
      alert("Employee created successfully.");
      this.router.navigate([''])
    });
  }
}
