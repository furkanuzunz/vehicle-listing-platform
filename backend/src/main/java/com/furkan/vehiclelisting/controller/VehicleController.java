package com.furkan.vehiclelisting.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.furkan.vehiclelisting.service.VehicleListingService;
import com.furkan.vehiclelisting.entity.VehicleListing;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {
    private final VehicleListingService service;

    public VehicleController(VehicleListingService service) {
    this.service = service;
}

  @GetMapping
    public List<VehicleListing> getVehicles() {
        return service.getAllVehicleListings();
    }

    @PostMapping
    public VehicleListing createVehicle(
        @RequestBody VehicleListing vehicleListing) {

    return service.createVehicleListing(vehicleListing);
}


}