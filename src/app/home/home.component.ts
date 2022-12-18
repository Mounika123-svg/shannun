import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  brands: any[] = [
    { brandName: 'Mercedes', brandLogo: 'assets/images/car-logos/mercedes.png' },
    { brandName: 'BMW', brandLogo: 'assets/images/car-logos/bmw.png' },
    { brandName: 'Porsche', brandLogo: 'assets/images/car-logos/porsche.png' },
    { brandName: 'Ferrari', brandLogo: 'assets/images/car-logos/ferrari.png' },
    { brandName: 'Tesla', brandLogo: 'assets/images/car-logos/tesla.png' },
    { brandName: 'Audi', brandLogo: 'assets/images/car-logos/audi.png' },
    { brandName: 'Rolls royce', brandLogo: 'assets/images/car-logos/rollsroys.png' },
    { brandName: 'Lexus', brandLogo: 'assets/images/car-logos/lexus.png' },
    { brandName: 'Aston martin', brandLogo: 'assets/images/car-logos/astonmartin.png' },
    { brandName: 'Mclaren', brandLogo: 'assets/images/car-logos/mclaren.png' },
    { brandName: 'Mitsubishi', brandLogo: 'assets/images/car-logos/mitsubishi.png' },
    { brandName: 'Ford', brandLogo: 'assets/images/car-logos/ford.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
