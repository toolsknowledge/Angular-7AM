import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterComponent } from './master.component';
import { ShirtsComponent } from './shirts.component';
import { PantsComponent } from './pants.component';
import { KidsComponent } from './kids.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    ShirtsComponent,
    PantsComponent,
    KidsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
