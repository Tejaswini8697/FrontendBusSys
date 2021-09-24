import { Component, OnInit } from '@angular/core';
import { UserHubService } from '../user-hub.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any;
  message : any;

  state = [
    { "name": "ANDHRA_PRADESH" },
    { "name": "ASSAM" },
    { "name": "ARUNACHAL_PRADESH" },
    { "name": "GUJARAT" },
    { "name": "BIHAR" },
    { "name": "HARYANA" },
    { "name": "HIMACHAL_PRADESH" },
    { "name": "JAMMU_KASHMIR" },
    { "name": "KARNATAKA" },
    { "name": "KERALA" },
    { "name": "MADHYA_PRADESH" },
    { "name": "MAHARASHTRA" },
    { "name": "MANIPUR" },
    { "name": "MEGHALAYA" },
    { "name": "MIZORAM" },
    { "name": "NAGALAND" },
    { "name": "ORISSA" },
    { "name": "PUNJAB" },
    { "name": "RAJASTHAN" },
    { "name": "SIKKIM" },
    { "name": "TAMIL_NADU" },
    { "name": "TRIPURA" },
    { "name": "UTTAR_PRADESH" },
    { "name": "WEST_BENGAL" },
    { "name": "DELHI" },
    { "name": "GOA" },
    { "name": "PONDICHERY" },
    { "name": "LAKSHDWEEP" },
    { "name": "DAMAN_DIU" },
    { "name": "DADRA_NAGAR" },
    { "name": "CHANDIGARH" },
    { "name": "ANDAMAN_NICOBAR" },
    { "name": "UTTARANCHAL" },
    { "name": "JHARKHAND" },
    { "name": "CHHATTISGARH" },
  ];

  constructor(private service : UserHubService)
  {

    console.log("RegisterUserComponent");
  }

  ngOnInit() {
  }

  addUser(userForm) {

    this.user = userForm.form.value;
    this.user.role = "CUSTOMER";
    let observableResult = this.service.registerUser(userForm.form.value);
      observableResult.subscribe(
        (result:any)=>{
          this.message = result;
        }, 
        (error)=>{
          this.message = "User cannot be registered, try different Email-ID";
        });

  }

}
