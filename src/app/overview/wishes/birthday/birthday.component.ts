import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.css'
})
export class BirthdayComponent {
  @Input() public birthdayData: any;
  public birthdays: any;
  

  constructor() { }

  ngOnInit() {
    this.getTodayBirthdays();
    debugger;
  }

  getTodayBirthdays() {
    const currentDay = new Date().getDate();
    this.birthdays = (this.birthdayData || []).filter((employee: any) => {
      const birthDay = new Date(employee.birthDate).getDate();
      return birthDay === currentDay;
    });
  }
}
