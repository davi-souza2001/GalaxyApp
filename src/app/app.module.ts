import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DescriptionComponent } from './components/description/description.component';
import { MercuryComponent } from './components/mercury/mercury.component';
import { MainComponent } from './components/main/main.component';
import { VenusComponent } from './components/venus/venus.component';
import { MarsComponent } from './components/mars/mars.component';
import { JupiterComponent } from './components/jupiter/jupiter.component';
import { SaturnComponent } from './components/saturn/saturn.component';
import { UranusComponent } from './components/uranus/uranus.component';
import { NeptuneComponent } from './components/neptune/neptune.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DescriptionComponent,
    MercuryComponent,
    MainComponent,
    VenusComponent,
    MarsComponent,
    JupiterComponent,
    SaturnComponent,
    UranusComponent,
    NeptuneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
