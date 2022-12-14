import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HideComponent } from './hide/hide.component';
import { CommunicationComponent } from './communication/communication.component';

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
    path: '**',
    redirectTo: 'hide'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
