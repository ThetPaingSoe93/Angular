import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AdduserComponent {
  username: string = '';
  status: string = 'active';

  constructor(private userService: UserService){

  }

  AddUser(){
    this.userService.AddNewUser(this.username,this.status);
  }
}
