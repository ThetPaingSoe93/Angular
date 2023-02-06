import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent {
    public departmentId:any;
    constructor(private route:ActivatedRoute,private router:Router) {  }

    ngOnInit() {
      this.route.paramMap.subscribe((params:ParamMap)=>{
        let id = Number(params.get('id'));
        this.departmentId = id;
      });
    }

    goPrev() {
      let prevId = this.departmentId-1;
      this.router.navigate(['/departments-list',prevId]);
    }

    goNext() {
      let nextId = this.departmentId+1;
      this.router.navigate(['/departments-list',nextId]);
    }

    goToDepartments() {
      let selectedId = this.departmentId ? this.departmentId : null;
      this.router.navigate(['../',{id: selectedId}],{relativeTo:this.route});
    }

    showOverview(){
      this.router.navigate(['overview'],{relativeTo:this.route});
    }

    showContact() {
      this.router.navigate(['contact'],{relativeTo:this.route});

    }
}