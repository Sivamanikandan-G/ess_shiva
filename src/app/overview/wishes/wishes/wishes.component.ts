import { Component } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrl: './wishes.component.css'
})
export class WishesComponent {
  public employees: any;
  public filteredBirthdays: any[] = [];

  constructor(private readonly dataSvc: DataService) { }

  ngOnInit() {
    this.employees = this.dataSvc.getData();
    this.filterBirthdays();
  }

  filterBirthdays() {
    const currentMonth = new Date().getMonth() + 1;

    this.filteredBirthdays = (this.employees || []).filter((employee: any) => {
      const birthMonth = new Date(employee.birthDate).getMonth() + 1; 
      return birthMonth === currentMonth;
    });
  }

}
