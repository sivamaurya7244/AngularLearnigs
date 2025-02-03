import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = "Angular Learner";
  courseDuration: number = 2;
  minLength: number = 5;
  myInput: string = "date";
  primary : string = "text-primary";
  dangerClass = "text-danger";

  showMessage()
  {
    alert("Hello World");
  }

  onStateChnage(event: any)
  {
    debugger;
    //const target = event.target.value;
    alert("State Changed to " + event.target?.['value']);

  }

  fun()
  {
    console.log("Hello World");
  }

  showLanguageName(name: string)
  {
    //alert("Language Name is " + name);
    console.log(name);
    
  }

}
