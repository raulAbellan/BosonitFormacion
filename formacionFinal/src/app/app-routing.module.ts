import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HideComponent } from './hide/hide.component';
import { CommunicationComponent } from './communication/communication.component';
import { CrudComponent } from './crud/crud.component';
import { SearchOnTypeComponent } from './search-on-type/search-on-type.component';

const routes: Routes = [
  {
    path: 'hide',
    component: HideComponent,
    pathMatch: 'full'
  },
  {
    path: 'communication',
    component:CommunicationComponent,
    pathMatch:'full'
  },
  {
    path: 'crud',
    component:CrudComponent,
    pathMatch:'full'
  },
  {
    path: 'search-on-type',
    component:SearchOnTypeComponent,
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: 'hide'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
