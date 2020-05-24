import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutComponent,
    UserComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
