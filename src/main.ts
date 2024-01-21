import {enableProdMode, importProvidersFrom} from '@angular/core';
import {environment} from './environments/environment';
import {AppComponent} from './app/app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AmazingTimePickerModule} from 'atp';
import {AppRoutingModule} from './app/app-routing.module';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule, AmazingTimePickerModule, ReactiveFormsModule)]
})
  .catch(err => console.error(err));
