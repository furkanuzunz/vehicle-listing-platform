package com.furkan.vehiclelisting.service;

import com.furkan.vehiclelisting.entity.VehicleListing;
import com.furkan.vehiclelisting.repository.VehicleListingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleListingService {

    private final VehicleListingRepository repository;

    public VehicleListingService(
            VehicleListingRepository repository) {
        this.repository = repository;
    }

     public List<VehicleListing> getAllVehicleListings() {
        return repository.findAll();
    }

    public VehicleListing createVehicleListing
            (VehicleListing vehicleListing) {
    return repository.save(vehicleListing);
}

   

}