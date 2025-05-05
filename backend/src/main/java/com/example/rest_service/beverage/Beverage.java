package com.example.rest_service.beverage;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "beverage")
public class Beverage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String code;
    private String description;
    private BigDecimal unitPrice;
    private Boolean hasSugar;
    private String imageUrl;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}