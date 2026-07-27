import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { CreateVehicleRequest } from '../../models/create-vehicle-request';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-create-listing-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-listing.html',
  styleUrl: './create-listing.css',
})
export class CreateListingPageComponent {
  private readonly vehicleService = inject(VehicleService);
  private readonly router = inject(Router);

  readonly listingForm = new FormGroup({
    brand: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    model: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    year: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(1900),
    ]),
    price: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(1),
    ]),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  isSubmitting = false;
  errorMessage = '';

  onSubmit(): void {
    if (this.listingForm.invalid) {
      this.listingForm.markAllAsTouched();
      return;
    }

    this.errorMessage = '';
    this.isSubmitting = true;

    const formValue = this.listingForm.getRawValue();
    const request: CreateVehicleRequest = {
      brand: formValue.brand.trim(),
      model: formValue.model.trim(),
      year: Number(formValue.year),
      price: Number(formValue.price),
      description: formValue.description.trim(),
    };

    this.vehicleService.createVehicle(request).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigate(['/']);
      },
      error: () => {
        this.isSubmitting = false;
        this.errorMessage =
          'İlan gönderilirken bir hata oluştu. Lütfen tekrar deneyin.';
      },
    });
  }
}
