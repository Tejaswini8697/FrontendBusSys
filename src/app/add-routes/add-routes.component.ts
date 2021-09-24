import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-add-routes',
  templateUrl: './add-routes.component.html',
  styleUrls: ['./add-routes.component.css']
})
export class AddRoutesComponent implements OnInit {

  message : any;
  states = [
            {"name": "ANDHRA_PRADESH"},
            {"name" : "ASSAM"},
            {"name" : "ARUNACHAL_PRADESH"},
            {"name" : "GUJARAT"},
            {"name" : "BIHAR"},
            {"name" : "HARYANA"},
            {"name" : "HIMACHAL_PRADESH"},
            {"name" : "JAMMU_KASHMIR"},
            {"name" : "KARNATAKA"},
            {"name" : "KERALA"},
            {"name" : "MADHYA_PRADESH"},
            {"name" : "MAHARASHTRA"},
            {"name" : "MANIPUR"},
            {"name" : "MEGHALAYA"},
            {"name" : "MIZORAM"},
            {"name" : "NAGALAND"},
            {"name" : "ORISSA"},
            {"name" : "PUNJAB"},
            {"name" : "RAJASTHAN"},
            {"name" : "SIKKIM"},
            {"name" : "TAMIL_NADU"},
            {"name" : "TRIPURA"},
            {"name" : "UTTAR_PRADESH"},
            {"name" : "WEST_BENGAL"},
            {"name" : "DELHI"},
            {"name" : "GOA"},
            {"name" : "PONDICHERY"},
            {"name" : "LAKSHDWEEP"},
            {"name" : "DAMAN_DIU"},
            {"name" : "DADRA_NAGAR"},
            {"name" : "CHANDIGARH"},
            {"name" : "ANDAMAN_NICOBAR"},
            {"name" : "UTTARANCHAL"},
            {"name" : "JHARKHAND"},
            {"name" : "CHHATTISGARH"},
          ];

  constructor(private service: AdminServiceService,
              private router: Router)
  {
    console.log("AddRoutesComponent created");
  }

  ngOnInit()
  {

  }

  addRoutes(addRoutesForm)
  {
    console.log("addRoutes" + addRoutesForm.form.value);
    let observableData = this.service.addRoutes(addRoutesForm.form.value);
    observableData.subscribe(
      (result:any)=>{
        console.log(result);
        this.message = "Routes added Successfully";
      }, 
      (error)=>{
        this.message = "Routes cannot be added";
    });
  }

  backHome()
  {
    this.router.navigate(['/admin']);
  }


}
