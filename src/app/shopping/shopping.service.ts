import { Ingredients } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService{

 ingridientChanged = new EventEmitter<Ingredients[]>();   
 private   indigrients: Ingredients[] =  [ new Ingredients( "Apple", 1, 2) ,new Ingredients( "Bannana" , 2,3) ];   

 getIngridients()
 {
    return this.indigrients.slice();
 }

 addingridient(ingridient:Ingredients)
 {
     this.indigrients.push(ingridient);
     this.ingridientChanged.emit(this.indigrients.slice());
 }

}