import { Component,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'] 
})
export class TestComponent {
  @Input('parentData') public name:any;
  
  @Output() public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit('Hey Codevolution');
  }

  public name2 = "Thet Paing Soe";
  public message2 = "Welcome to CodeVolution";
  public person = {
    "firstName" : "Thet",
    "lastName":"Soe"
  }
  public date = new Date();
}
