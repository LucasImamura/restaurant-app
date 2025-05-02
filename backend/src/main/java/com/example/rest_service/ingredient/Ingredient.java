package com.example.rest_service.ingredient;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
    private Integer id;
    private String code;
    private String description;
    private BigDecimal unitPrice;
    private Boolean canBeExtra;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
