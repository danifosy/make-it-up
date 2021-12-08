import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { StartMenuComponent } from './start-menu/start-menu.component';
import { EyeMenuComponent } from './eye-menu/eye-menu.component';
import { LipMenuComponent } from './lip-menu/lip-menu.component';
import { FaceMenuComponent } from './face-menu/face-menu.component';
import { NailMenuComponent } from './nail-menu/nail-menu.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    StartMenuComponent,
    EyeMenuComponent,
    LipMenuComponent,
    FaceMenuComponent,
    NailMenuComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
