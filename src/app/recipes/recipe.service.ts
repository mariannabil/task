import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
 private   recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
        'This is simply a test',
         'https://nofailrecipe.com/wp-content/uploads/2015/11/oven-smoked-pulled-pork.jpg',
         [
             new Ingredient('Meat', 1),
             new Ingredient('French Fries', 20)
         ]),
        new Recipe(
            'Big fat Burger',
            'ehat else u need to say?', 
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nbcnews.com%2Fbetter%2Flifestyle%2F8-chefs-share-their-favorite-burger-recipes-summer-ncna1009186&psig=AOvVaw3Rrh3aqknb4Q-GWenAHekE&ust=1614672316659000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDJj-PQju8CFQAAAAAdAAAAABAL',
            [
                new Ingredient('Buns' ,2),
                new Ingredient ('Meat' , 1)
            ]),
      
      ];
      constructor(private slService : ShoppingListService) {}
      getRecipes(){
          return this.recipes.slice();
      } 
      getRecipe(id:number){
return this.recipes[id];
      }
      addIngredientsToShoppingList(ingredients :Ingredient[]){
this.slService.addIngredients(ingredients);
      }
}