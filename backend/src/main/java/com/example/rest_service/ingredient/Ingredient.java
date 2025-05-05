package com.example.rest_service.ingredient;

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
@Table(name = "ingredient")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String code;
    private String description;
    private BigDecimal unitPrice;
    private Boolean canBeExtra;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
