import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainMenuComponent } from './main-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    MainMenuComponent
  ],
 
})
export class MainMenuModule { }