import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOwnerComponent } from './Components/add-owner/add-owner.component';
import { EditOwnerComponent } from './Components/edit-owner/edit-owner.component';
import { DisplayAllComponent } from './Components/display-all/display-all.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddOwnerComponent,
    EditOwnerComponent,
    DisplayAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }

