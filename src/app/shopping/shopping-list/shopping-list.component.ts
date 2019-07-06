import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
 
})
export class ShoppingListComponent implements OnInit {

  indigrients: Ingredients[];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {

    this.indigrients = this.shoppingService.getIngridients();
    this.shoppingService.ingridientChanged
    .subscribe((indigrients: Ingredients[]) => {
        this.indigrients = indigrients;
    });

  }

}
