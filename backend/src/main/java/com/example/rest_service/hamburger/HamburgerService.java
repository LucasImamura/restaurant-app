package com.example.rest_service.hamburger;

import com.example.rest_service.ingredient.Ingredient;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class HamburgerService {

    private final HamburgerRepository hamburgerRepository;

    public List<Hamburger> getAllHamburgers() {
        return hamburgerRepository.findAll();
    }

    public Hamburger getHamburgerById(Integer id) {
        Optional<Hamburger> optionalHamburger = hamburgerRepository.findById(id);
        if (optionalHamburger.isPresent()) {
            return optionalHamburger.get();
        }
        log.info("Hamburger with id: {} doesn't exist", id);
        return null;
    }

    public Hamburger saveHamburger(Hamburger hamburger) {
        hamburger.setCreatedAt(LocalDateTime.now());
        hamburger.setUpdatedAt(LocalDateTime.now());
        Hamburger savedHamburger = hamburgerRepository.save(hamburger);

        log.info("Hamburger with id: {} saved successfully", hamburger.getId());
        return savedHamburger;
    }

    public Hamburger updateHamburger(Hamburger hamburger) {
        Optional<Hamburger> existingHamburger = hamburgerRepository.findById(hamburger.getId());
        if (existingHamburger.isEmpty()) {
            log.info("Update failed because the hamburger does not exist");
            return null;
        }

        hamburger.setCreatedAt(existingHamburger.get().getCreatedAt());
        hamburger.setUpdatedAt(LocalDateTime.now());

        Hamburger updatedHamburger = hamburgerRepository.save(hamburger);

        log.info("Hamburger with id: {} updated successfully", hamburger.getId());
        return updatedHamburger;
    }

    public void deleteHamburgerById(Integer id) {
        hamburgerRepository.deleteById(id);
    }
}