import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList :any[] = [];
  employeeList :any[] = [];

  constructor(private http: HttpClient) { }

  getApiData() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any) => {
      this.userList = data;
      console.log(data);
    });
  }
  getEmployeeData() {
    this.http.get('https://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees').subscribe((data: any) => {
      this.employeeList = data;
      console.log(data);
    });
  }

}
