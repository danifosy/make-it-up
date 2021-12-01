import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'subSelection', component: SubMenuComponent },
  { path: 'home', component: StartMenuComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
