import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Costela Suina', 'Deliciosa costela suína.', 'https://s3.amazonaws.com/institucional-statics-files/site/uploads/18_Ribs-on-the-Barbie.png')
  ];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.recipes);
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
