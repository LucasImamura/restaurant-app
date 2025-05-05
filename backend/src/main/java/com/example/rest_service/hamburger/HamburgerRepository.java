package com.example.rest_service.hamburger;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface HamburgerRepository extends JpaRepository<Hamburger, Integer> {
}