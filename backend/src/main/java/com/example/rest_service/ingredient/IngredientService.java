package com.example.rest_service.ingredient;

import com.example.rest_service.ingredient.Ingredient;
import com.example.rest_service.ingredient.IngredientRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
@Slf4j
public class IngredientService {

    private final IngredientRepository ingredientRepository;

    public List<Ingredient> getAllIngredients(){
        return ingredientRepository.findAll();
    }

    public Ingredient getIngredientById(Integer id){
        Optional<Ingredient> optionalIngredient = ingredientRepository.findById(id);
        if(optionalIngredient.isPresent()){
            return optionalIngredient.get();
        }
        log.info("Ingredient with id: {} doesn't exist", id);
        return null;
    }

    public Ingredient saveIngredient (Ingredient ingredient){
        ingredient.setCreatedAt(LocalDateTime.now());
        ingredient.setUpdatedAt(LocalDateTime.now());
        Ingredient savedIngredient = ingredientRepository.save(ingredient);

        log.info("Ingredient with id: {} saved successfully", ingredient.getId());
        return savedIngredient;
    }

    public Ingredient updateIngredient(Integer id) {
        Ingredient existingIngredient = ingredientRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Ingredient not found with id: " + id));

        existingIngredient.setCreatedAt(existingIngredient.getCreatedAt());
        existingIngredient.setUpdatedAt(LocalDateTime.now());

        Ingredient updatedIngredient = ingredientRepository.save(existingIngredient);
        log.info("Ingredient with id: {} updated successfully", id);
        return updatedIngredient;
    }

    public void deleteIngredientById (Integer id) {
        ingredientRepository.deleteById(id);
    }

}