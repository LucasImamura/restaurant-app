package com.example.rest_service.hamburger;

import com.example.rest_service.ingredient.Ingredient;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/hamburger")
@RequiredArgsConstructor
@Validated
public class HamburgerController {

    private final HamburgerService hamburgerService;

    @GetMapping("/")
    public ResponseEntity<List<Hamburger>> getAllHamburgers() {
        return ResponseEntity.ok().body(hamburgerService.getAllHamburgers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hamburger> getHamburgerById(@PathVariable Integer id) {
        return ResponseEntity.ok().body(hamburgerService.getHamburgerById(id));
    }

    @PostMapping("/")
    public ResponseEntity<Hamburger> saveHamburger(@RequestBody Hamburger hamburger) {
        return ResponseEntity.ok().body(hamburgerService.saveHamburger(hamburger));
    }

    @PutMapping("/")
    public ResponseEntity<Hamburger> updateHamburger(@RequestBody Hamburger hamburger) {
        return ResponseEntity.ok().body(hamburgerService.updateHamburger(hamburger));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteHamburgerById(@PathVariable Integer id) {
        hamburgerService.deleteHamburgerById(id);
        return ResponseEntity.ok().body("Deleted hamburger successfully");
    }
}