import { Component } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  public resData: any;

  constructor(private readonly dataSvc: DataService) { }
  ngOnInit() {
    this.callServiceMethod();
  }

  callServiceMethod() {
    this.dataSvc.getApi('users').subscribe({
      next: (response) => {
        const typedResponse = response as { users: any };
        this.resData = typedResponse.users;
        this.dataSvc.setData(this.resData);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

}
