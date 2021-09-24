import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-edit-routes',
  templateUrl: './edit-routes.component.html',
  styleUrls: ['./edit-routes.component.css']
})
export class EditRoutesComponent implements OnInit {

  routes = {"id":"", "source": "", "sourceState": "", "destination": "", "destinationState": ""};
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
              private router: Router,
              private route: ActivatedRoute)
  {
    console.log("EditRoutesComponent created");
  }

  ngOnInit()
  {
    console.log("init created");
    this.route.paramMap.subscribe((record)=>{
      console.log(record.get("id"));

      //record.get("id")
      let observableResult = this.service.getRoutesById(record.get("id"));
      observableResult.subscribe(
        (result:any)=>{
          this.routes = result;
        }, 
        (error)=>{
          this.message = "Routes cannot be loaded";
        });
    });
  }

  updateRoutes()
  {
    console.log("updateRoutes" + this.routes.id);
    let observableData = this.service.updateRoutes(this.routes);
    observableData.subscribe(
      (result:any)=>{
        console.log(result);
        this.router.navigate(['/admin']);
      }, 
      (error)=>{
        this.message = "Routes cannot be updated";
    });
  }

  backHome()
  {
    this.router.navigate(['/admin']);
  }


}
