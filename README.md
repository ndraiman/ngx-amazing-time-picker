# NgxAmazingTimePicker

[![npm](https://img.shields.io/npm/v/ngx-amazing-time-picker)](https://www.npmjs.com/package/ngx-amazing-time-picker)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ndraiman/ngx-amazing-time-picker/master/LICENSE.md)

Updated [AmazingTimePicker](https://github.com/owsolutions/amazing-time-picker) library to work with recent angular versions

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ndraiman/ngx-amazing-time-picker/tree/v14.0.0?file=src%2Fapp%2Fapp.component.ts)

---

## Install
You need to install this repository as dependency and import it to your `app.module.ts` in `imports` section.

```console
npm install ngx-amazing-time-picker --save
```

then, open your `app.module.ts` or other module that you want to use timepicker among, and import and add it to the `imports` section:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmazingTimePickerModule } from 'ngx-amazing-time-picker'; // <===
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmazingTimePickerModule // <===
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Using in component markup

You can use it within your html templates and add the `atp-time-picker` directive to the `<input>` tag.
Clicking the input will open the timepicker dialog
When the dialog is closed, it'll update the input value.

```html
<input atp-time-picker value="19:00"/>
```

## Opening component programmatically
You can also open a timepicker dialog programmatically. In order to open that, you need to import the service in your component:

```ts
import { AmazingTimePickerService } from 'ngx-amazing-time-picker';
```

Then add it inside your `app.component.ts` or any other component, for example:

```ts
import { Component } from '@angular/core';
import { AmazingTimePickerService } from 'ngx-amazing-time-picker'; // <===
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private atp: AmazingTimePickerService) {} // <===
  
  open() {
    this.atp.open()
      .afterClose()
      .subscribe(value => {
        this.timeForm.setValue(value);
      });
  }
}
```
