package com.example.rest_service.beverage;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BeverageService {

    private final BeverageRepository beverageRepository;

    public List<Beverage> getAllBeverages() {
        return beverageRepository.findAll();
    }

    public Beverage getBeverageById(Integer id) {
        Optional<Beverage> optionalBeverage = beverageRepository.findById(id);
        if (optionalBeverage.isPresent()) {
            return optionalBeverage.get();
        }
        log.info("Beverage with id: {} doesn't exist", id);
        return null;
    }

    public Beverage saveBeverage(Beverage beverage) {
        beverage.setCreatedAt(LocalDateTime.now());
        beverage.setUpdatedAt(LocalDateTime.now());
        Beverage savedBeverage = beverageRepository.save(beverage);

        log.info("Beverage with id: {} saved successfully", beverage.getId());
        return savedBeverage;
    }

    public Beverage updateBeverage(Beverage beverage) {
        Optional<Beverage> existingBeverage = beverageRepository.findById(beverage.getId());
        if (existingBeverage.isEmpty()) {
            log.info("Update failed because the beverage does not exist");
            return null;
        }

        beverage.setCreatedAt(existingBeverage.get().getCreatedAt());
        beverage.setUpdatedAt(LocalDateTime.now());

        Beverage updatedBeverage = beverageRepository.save(beverage);

        log.info("Beverage with id: {} updated successfully", beverage.getId());
        return updatedBeverage;
    }

    public void deleteBeverageById(Integer id) {
        beverageRepository.deleteById(id);
    }
}