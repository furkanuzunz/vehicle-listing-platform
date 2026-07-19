package com.furkan.vehiclelisting.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    @GetMapping
    public String getVehicles() {
        return "Vehicle API is working";
    }
}