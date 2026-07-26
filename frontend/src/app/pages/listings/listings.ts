import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit
} from '@angular/core';

import { VehicleCardComponent } from '../../components/vehicle-card/vehicle-card';
import { VehicleListing } from '../../models/vehicle-listing';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-listings-page',
  standalone: true,
  imports: [VehicleCardComponent],
  templateUrl: './listings.html',
  styleUrl: './listings.css',
})
export class ListingsPageComponent implements OnInit {
  private readonly vehicleService = inject(VehicleService);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  readonly filters = [
    'Brand',
    'Model',
    'Minimum Price',
    'Maximum Price',
    'Minimum Year'
  ];

  listings: VehicleListing[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe({
      next: (vehicles) => {
        this.listings = vehicles;
        this.isLoading = false;
        this.changeDetectorRef.markForCheck();
      },
      error: () => {
        this.errorMessage =
          'Araçlar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
        this.isLoading = false;
        this.changeDetectorRef.markForCheck();
      },
    });
  }
}
