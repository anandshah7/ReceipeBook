import { Receipe } from './Receipe.model';
import { EventEmitter } from '@angular/core';

export class ReceipeService {
receipeSelected = new EventEmitter<Receipe>();

  private  Receipes: Receipe[] = [
        new Receipe(1,"Test Receipe","Test description","https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg")
        , new Receipe(2,"Test Receipe 2","Test description 2 ","https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg")
      
       ];
   public getReceipes()
   {
       return this.Receipes.slice();
   }

   public getReceipeById(id: number)
   {
       return this.Receipes.find(x => x.Id === id);
   }
   

}