import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
	selector: 'app-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
	public employees: any = [];
	public errorMsg: any;
	constructor(private _employeeService: EmployeeService) { }

	ngOnInit() {
		this._employeeService.getEmployees()
			.subscribe(
				(res) =>  
					this.employees = res,
				
				(err) => {
					this.errorMsg = err;
					console.log(err)
			
				})
	}

}
