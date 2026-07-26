import { Component, input } from '@angular/core';

import { VehicleListing } from '../../models/vehicle-listing';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  templateUrl: './vehicle-card.html',
  styleUrl: './vehicle-card.css',
})
export class VehicleCardComponent {
  readonly listing = input.required<VehicleListing>();

  readonly placeholderImage =
    'https://placehold.co/900x500?text=Vehicle';
}
