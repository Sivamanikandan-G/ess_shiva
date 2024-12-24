import { Component } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrl: './wishes.component.css'
})
export class WishesComponent {
  constructor(private readonly dataSvc: DataService) { }
  ngOnInit() {
    this.callServiceMethod();
  }

  callServiceMethod() {
    console.log(this.dataSvc.exampleMethod());
  }
}
