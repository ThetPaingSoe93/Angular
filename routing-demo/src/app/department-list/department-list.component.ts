import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent {

  public selectedId:any;

  departments=[
    {"id": 1,"name":"Html"},
    {"id": 2,"name":"Css"},
    {"id": 3,"name":"JavaScript"},
    {"id": 4,"name":"Jquery"},
    {"id": 5,"name":"React"},
    {"id": 6,"name":"Angular"}
  ]
  
  constructor(private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id =Number(params.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(department:any) {
    this.router.navigate([department.id],{relativeTo:this.route})
  }

  isSelected(department:any) {
    return department.id === this.selectedId;
  }
}
