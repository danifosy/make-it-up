import { StartMenuComponent } from './start-menu/start-menu.component';
import { EyeMenuComponent } from './eye-menu/eye-menu.component';
import { LipMenuComponent } from './lip-menu/lip-menu.component';
import { FaceMenuComponent } from './face-menu/face-menu.component';
import { NailMenuComponent } from './nail-menu/nail-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'eyesMenu', component: EyeMenuComponent },
  { path: 'lipsMenu', component: LipMenuComponent },
  { path: 'faceMenu', component: FaceMenuComponent },
  { path: 'nailsMenu', component: NailMenuComponent },
  { path: 'home', component: StartMenuComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
