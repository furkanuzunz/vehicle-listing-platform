import { Component, inject, OnInit } from '@angular/core';

import { VehicleListing } from './models/vehicle-listing';
import { VehicleService } from './services/vehicle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly vehicleService = inject(VehicleService);

  readonly filters = ['Brand', 'Model', 'Minimum Price', 'Maximum Price', 'Minimum Year'];
  readonly placeholderImage = 'https://placehold.co/900x500?text=Vehicle';

  listings: VehicleListing[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe({
      next: (vehicles) => {
        this.listings = vehicles;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Araçlar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
        this.isLoading = false;
      },
    });
  }
}
