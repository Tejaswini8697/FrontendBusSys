import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBusComponent } from './search-bus/search-bus.component';


const routes: Routes = [

 {
  path: 'search-bus' , component : SearchBusComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
