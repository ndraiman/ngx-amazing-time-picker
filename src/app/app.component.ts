import { Component } from '@angular/core';
import { AmazingTimePickerService } from 'atp';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  timeForm = new FormControl<string>('08:21:30.123');

  constructor(private atp: AmazingTimePickerService) {
  }

  openTimeDialog() {
    this.atp.open({time: this.timeForm.value, changeToMinutes: true})
      .afterClose()
      .subscribe(value => {
        this.timeForm.setValue(value);
      });
  }
}
