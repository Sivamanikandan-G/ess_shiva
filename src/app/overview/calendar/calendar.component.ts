import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  private readonly date: Date = new Date();
  private currYear: number = this.date.getFullYear();
  private currMonth: number = this.date.getMonth();
  
  currentDateStr: string = '';
  calendarDays: Array<{ date: number; isCurrentMonth: boolean; isToday: boolean }> = [];
  
  readonly weekDays: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  readonly months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  ngOnInit(): void {
    this.renderCalendar();
  }

  private renderCalendar(): void {
    const firstDayofMonth = new Date(this.currYear, this.currMonth, 1).getDay();
    const lastDateofMonth = new Date(this.currYear, this.currMonth + 1, 0).getDate();
    const lastDayofMonth = new Date(this.currYear, this.currMonth, lastDateofMonth).getDay();
    const lastDateofLastMonth = new Date(this.currYear, this.currMonth, 0).getDate();

    this.currentDateStr = `${this.months[this.currMonth]} ${this.currYear}`;
    this.calendarDays = [];

    // Previous month's days
    for (let i = firstDayofMonth; i > 0; i--) {
      this.calendarDays.push({
        date: lastDateofLastMonth - i + 1,
        isCurrentMonth: false,
        isToday: false
      });
    }

    // Current month's days
    for (let i = 1; i <= lastDateofMonth; i++) {
      const isToday = i === this.date.getDate() && 
                     this.currMonth === new Date().getMonth() && 
                     this.currYear === new Date().getFullYear();
      
      this.calendarDays.push({
        date: i,
        isCurrentMonth: true,
        isToday: isToday
      });
    }

    // Next month's days
    for (let i = lastDayofMonth; i < 6; i++) {
      this.calendarDays.push({
        date: i - lastDayofMonth + 1,
        isCurrentMonth: false,
        isToday: false
      });
    }
  }

  handleMonthChange(direction: 'prev' | 'next'): void {
    this.currMonth = direction === 'prev' ? this.currMonth - 1 : this.currMonth + 1;

    if (this.currMonth < 0 || this.currMonth > 11) {
      const newDate = new Date(this.currYear, this.currMonth, new Date().getDate());
      this.currYear = newDate.getFullYear();
      this.currMonth = newDate.getMonth();
    }

    this.renderCalendar();
  }

  onDateClick(day: { date: number; isCurrentMonth: boolean; isToday: boolean }): void {
    if (day.isCurrentMonth) {
      console.log(`Clicked date: ${day.date}/${this.currMonth + 1}/${this.currYear}`);
    }
  }
}
