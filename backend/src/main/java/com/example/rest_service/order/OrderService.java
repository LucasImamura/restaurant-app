package com.example.rest_service.order;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrderService {

    private final OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(Integer id) {
        Optional<Order> optionalOrder = orderRepository.findById(id);
        if (optionalOrder.isPresent()) {
            return optionalOrder.get();
        }
        log.info("Order with id: {} doesn't exist", id);
        return null;
    }

    public Order saveOrder(Order order) {
        order.setCreatedAt(LocalDateTime.now());
        order.setUpdatedAt(LocalDateTime.now());
        Order savedOrder = orderRepository.save(order);

        log.info("Order with id: {} saved successfully", order.getId());
        return savedOrder;
    }

    public Order updateOrder(Order order) {
        Optional<Order> existingOrder = orderRepository.findById(order.getId());
        if (existingOrder.isEmpty()) {
            log.info("Update failed because the order does not exist");
            return null;
        }

        order.setCreatedAt(existingOrder.get().getCreatedAt());
        order.setUpdatedAt(LocalDateTime.now());

        Order updatedOrder = orderRepository.save(order);

        log.info("Order with id: {} updated successfully", order.getId());
        return updatedOrder;
    }

    public void deleteOrderById(Integer id) {
        orderRepository.deleteById(id);
        log.info("Order with id: {} deleted successfully", id);
    }
}