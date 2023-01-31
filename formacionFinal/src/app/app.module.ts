import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DropDownComponent } from './shared/drop-down/drop-down.component';

import { HideComponent } from './hide/hide.component';
import { CommunicationComponent } from './communication/communication.component';
import { ChildComponent } from './communication/child/child.component';
import { ParentComponent } from './communication/parent/parent.component';
import { SearchOnTypeComponent } from './search-on-type/search-on-type.component';
import { CrudComponent } from './crud/crud.component';
import { FormComponent } from './crud/form/form.component';
import { ListComponent } from './crud/list/list.component';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { TraficLightComponentComponent } from './light-switch/trafic-light-component/trafic-light-component.component';
import { ControllerComponentComponent } from './light-switch/controller-component/controller-component.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//primeNg
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeSelectModule } from 'primeng/treeselect';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import {SelectButtonModule} from 'primeng/selectbutton';


@NgModule({
  declarations: [
    AppComponent,
    HideComponent,
    DropDownComponent,
    CommunicationComponent,
    ParentComponent,
    ChildComponent,
    CrudComponent,
    FormComponent,
    ListComponent,
    SearchOnTypeComponent,
    LightSwitchComponent,
    TraficLightComponentComponent,
    ControllerComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    FormsModule,
    CheckboxModule,
    TreeSelectModule,
    DropdownModule,
    BrowserAnimationsModule,
    TableModule,
    ReactiveFormsModule,
    HttpClientModule,
    SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
