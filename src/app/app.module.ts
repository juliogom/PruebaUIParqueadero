import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';

//Services
import { DatosServices } from './Services/DatosServices.service';




@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatosServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
