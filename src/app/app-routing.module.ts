import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DescriptionComponent } from './components/description/description.component';
import { MercuryComponent } from './components/mercury/mercury.component';
import { VenusComponent } from './components/venus/venus.component';
import { MarsComponent } from './components/mars/mars.component';
import { JupiterComponent } from './components/jupiter/jupiter.component';
import { SaturnComponent } from './components/saturn/saturn.component';
import { UranusComponent } from './components/uranus/uranus.component';
import { NeptuneComponent } from './components/neptune/neptune.component';


const routes: Routes = [
  {
    path: "",
    component: DescriptionComponent
  },{
    path: "mercury",
    component: MercuryComponent
  },{
    path: "venus",
    component: VenusComponent
  },{
    path: "mars",
    component: MarsComponent
  },{
    path: "jupiter",
    component: JupiterComponent
  },{
    path: "saturn",
    component: SaturnComponent
  },{
    path: "uranus",
    component: UranusComponent
  },{
    path: "neptune",
    component: NeptuneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
