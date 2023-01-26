import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DropDownComponent } from './shared/drop-down/drop-down.component';

import { HideComponent } from './hide/hide.component';
import { CommunicationComponent } from './communication/communication.component';

import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';

import { CrudComponent } from './crud/crud.component';

//primeNg
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeSelectModule } from 'primeng/treeselect';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { FormComponent } from './crud/form/form.component';
import { ListComponent } from './crud/list/list.component';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
