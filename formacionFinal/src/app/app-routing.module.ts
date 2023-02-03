import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HideComponent } from './hide/hide.component';
import { CommunicationComponent } from './communication/communication.component';
import { CrudComponent } from './crud/crud.component';
import { SearchOnTypeComponent } from './search-on-type/search-on-type.component';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  {
    path: 'hide',
    component: HideComponent,
    pathMatch: 'full',
  },
  {
    path: 'communication',
    component: CommunicationComponent,
    pathMatch: 'full',
  },
  {
    path: 'crud',
    component: CrudComponent,
    pathMatch: 'full',
  },
  {
    path: 'search-on-type',
    component: SearchOnTypeComponent,
    pathMatch: 'full',
  },
  {
    path: 'light-switch',
    component: LightSwitchComponent,
    pathMatch: 'full',
  },
  {
    path: 'graphics',
    component: GraphicsComponent,
    pathMatch: 'full',
  },
  {
    path: 'counter',
    component: CounterComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'hide',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
