import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {
  public employees:any = [];
  public errorMsg:any;

  constructor(private _employeeService: EmployeeService){}
	
	ngOnInit(){
		this._employeeService.getEmployees()
		.subscribe(data => this.employees = data,
			error => this.errorMsg = error.message);
	}

}
