package com.example.rest_service.ingredient;

import com.example.rest_service.ingredient.Ingredient;
import com.example.rest_service.ingredient.IngredientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ingredient")
@RequiredArgsConstructor
@Validated
public class IngredientController {

    private final IngredientService ingredientService;

    @GetMapping("/")
    public ResponseEntity<List<Ingredient>> getAllIngredients(){
        return ResponseEntity.ok().body(ingredientService.getAllIngredients());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ingredient> getIngredientById(@PathVariable Integer id)
    {
        return ResponseEntity.ok().body(ingredientService.getIngredientById(id));
    }

    @PostMapping("/")
    public ResponseEntity<Ingredient> saveIngredient(@RequestBody Ingredient ingredient)
    {
        return ResponseEntity.ok().body(ingredientService.saveIngredient(ingredient));
    }

    @PutMapping("/")
    public ResponseEntity<Ingredient> updateIngredient(@RequestBody Ingredient ingredient)
    {
        return ResponseEntity.ok().body(ingredientService.updateIngredient(ingredient));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteIngredientById(@PathVariable Integer id)
    {
        ingredientService.deleteIngredientById(id);
        return ResponseEntity.ok().body("Deleted ingredient successfully");
    }


}
