import { Component, inject, OnInit } from "@angular/core";
import { TrackingService } from "./tracking-money.service";

@Component({
  selector: 'app-tracking-money',
  templateUrl: './tracking-money.component.html',
})
export class AppTrackingMoney implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  private readonly api = inject(TrackingService);
  goApi$ = this.api.getBaptisteGoApi();


  country: Food[] = [
    { value: 'steak-0', viewValue: 'USA' },
    { value: 'pizza-1', viewValue: 'India' },
    { value: 'tacos-2', viewValue: 'France' },
    { value: 'tacos-3', viewValue: 'UK' },
  ];

  selectedCountry = this.country[2].value;

  city: Food[] = [
    { value: 'steak-0', viewValue: 'Mexico' },
    { value: 'pizza-1', viewValue: 'Mumbai' },
    { value: 'tacos-2', viewValue: 'Tokyo' },
    { value: 'tacos-3', viewValue: 'New York' },
  ];

  selectedCity = this.city[1].value;

  categoria: Food[] = [
    { value: 'steak-0', viewValue: 'Aseo' },
    { value: 'pizza-1', viewValue: 'Comida' },
    { value: 'tacos-2', viewValue: 'Galgerias' },
    { value: 'tacos-3', viewValue: 'Rocky' },
  ];

  selectedCategoria = this.categoria[3].value;
}
interface Food {
  value: string;
  viewValue: string;
}
