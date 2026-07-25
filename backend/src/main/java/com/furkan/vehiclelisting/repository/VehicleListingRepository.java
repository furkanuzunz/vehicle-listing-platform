package com.furkan.vehiclelisting.repository;

import com.furkan.vehiclelisting.entity.VehicleListing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleListingRepository 
        extends JpaRepository<VehicleListing, Long> {
    // JpaRepository, temel CRUD ve sayfalama işlemlerini sağlar
}