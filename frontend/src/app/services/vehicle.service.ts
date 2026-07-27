import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CreateVehicleRequest } from '../models/create-vehicle-request';
import { VehicleListing } from '../models/vehicle-listing';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/vehicles';

  getVehicles(): Observable<VehicleListing[]> {
    return this.http.get<VehicleListing[]>(this.apiUrl);
  }

  createVehicle(
    request: CreateVehicleRequest
  ): Observable<VehicleListing> {
    return this.http.post<VehicleListing>(
      this.apiUrl,
      request
    );
  }
}
