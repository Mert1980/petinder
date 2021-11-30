import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {LayoutModule} from "./layout/layout.module";
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameFilterPipe } from './pipe/name-filter.pipe';
import { SetupDateComponent } from './setup/setup-date/setup-date.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileGalleryComponent,
    NameFilterPipe,
    SetupDateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
