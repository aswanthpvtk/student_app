import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {


  name=""
admno=""
rollno=""
college=""


  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"name":this.name,"admno":this.admno,"rollno":this.rollno,"college":this.college}
    console.log(data)
    this.api.addStd(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status == "success") {

          alert("Successfully added")
  
          this.name=""
  
          this.admno=""

          this.rollno=""
  
          this.college=""
  
          
  
        } else {
  
          alert("Something went wrong")
  
        }
      }
    )
  }

}
