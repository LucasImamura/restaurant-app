package com.example.rest_service.beverage;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/beverage")
@RequiredArgsConstructor
@Validated
public class BeverageController {

    private final BeverageService beverageService;

    @GetMapping("/")
    public ResponseEntity<List<Beverage>> getAllBeverages() {
        return ResponseEntity.ok().body(beverageService.getAllBeverages());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Beverage> getBeverageById(@PathVariable Integer id) {
        return ResponseEntity.ok().body(beverageService.getBeverageById(id));
    }

    @PostMapping("/")
    public ResponseEntity<Beverage> saveBeverage(@RequestBody Beverage beverage) {
        return ResponseEntity.ok().body(beverageService.saveBeverage(beverage));
    }

    @PutMapping("/")
    public ResponseEntity<Beverage> updateBeverage(@RequestBody Beverage beverage) {
        return ResponseEntity.ok().body(beverageService.updateBeverage(beverage));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBeverageById(@PathVariable Integer id) {
        beverageService.deleteBeverageById(id);
        return ResponseEntity.ok().body("Deleted beverage successfully");
    }
}