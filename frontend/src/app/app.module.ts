import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { EyeMenuComponent } from './eye-menu/eye-menu.component';
import { LipMenuComponent } from './lip-menu/lip-menu.component';
import { FaceMenuComponent } from './face-menu/face-menu.component';
import { NailMenuComponent } from './nail-menu/nail-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    StartMenuComponent,
    EyeMenuComponent,
    LipMenuComponent,
    FaceMenuComponent,
    NailMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
