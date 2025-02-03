import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
 isDivVisible: boolean = true;
 showDiv(isShow: boolean) {
    this.isDivVisible = isShow;

 }

 div2Visible: string = "yes";
 dayName: string = "";

 cityList: string[] = ["New York", "New Jersey", "New Mexico", "New Hampshire", "New Delhi"];

 studentList: any[] = [

  {name: "John", mobileNo: "1234567890", city: "New York", isActive:true}, 
  {name: "Jane", mobileNo: "2345678901", city: "New Jersey", isActive:false},
  {name: "Jim", mobileNo: "3456789012", city: "New Mexico", isActive:true},
  {name: "Jack", mobileNo: "4567890123", city: "New Hampshire", isActive:false},
  {name: "Jill", mobileNo: "5678901234", city: "New Delhi", isActive:false}


 ];
 
}
