package com.example.rest_service.order;

import com.example.rest_service.hamburger.Hamburger;
import com.example.rest_service.beverage.Beverage;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String code;
    private String description;
    private String observations;
    private String clientName;
    private String clientAddress;
    private String clientTelephone;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @ManyToMany
    @JoinTable(
            name = "order_hamburger",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "hamburger_id")
    )
    private List<Hamburger> hamburgers;

    @ManyToMany
    @JoinTable(
            name = "order_beverage",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "beverage_id")
    )
    private List<Beverage> beverages;
}