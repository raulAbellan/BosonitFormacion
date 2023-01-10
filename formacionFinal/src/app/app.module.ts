import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { DropDownComponent } from './shared/drop-down/drop-down.component';

import { HideComponent } from './hide/hide.component';
import { CommunicationComponent } from './communication/communication.component';

import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';

//primeNg
import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { CrudComponent } from './crud/crud.component';


@NgModule({
  declarations: [
    AppComponent,
    HideComponent,
    DropDownComponent,
    CommunicationComponent,
    ParentComponent,
    ChildComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
