import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {


  name=""
admno=""
rno=""
cname=""


  // constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"name":this.name,"admno":this.admno,"rno":this.rno,"cname":this.cname}
    console.log(data)
    // this.api.addEmp(data).subscribe(
    //   (response:any)=>
    //   {
    //     console.log(response)
    //     if (response.status == "success") {

    //       alert("Successfully added")
  
    //       this.name=""
  
    //       this.admno=""

    //       this.rno=""
  
    //       this.cname=""
  
          
  
    //     } else {
  
    //       alert("Something went wrong")
  
    //     }
    //   }
    // )
  }

}
