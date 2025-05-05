package com.example.rest_service.order;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
@Validated
public class OrderController {

    private final OrderService orderService;

    @GetMapping("/")
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok().body(orderService.getAllOrders());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Integer id) {
        return ResponseEntity.ok().body(orderService.getOrderById(id));
    }

    @PostMapping("/")
    public ResponseEntity<Order> saveOrder(@RequestBody Order order) {
        return ResponseEntity.ok().body(orderService.saveOrder(order));
    }

    @PutMapping("/")
    public ResponseEntity<Order> updateOrder(@RequestBody Order order) {
        return ResponseEntity.ok().body(orderService.updateOrder(order));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOrderById(@PathVariable Integer id) {
        orderService.deleteOrderById(id);
        return ResponseEntity.ok().body("Deleted order successfully");
    }
}