import { Component, OnInit, EventEmitter , Output} from '@angular/core';
import { Receipe } from '../Receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
 @Output() ReceipeWasSelected = new EventEmitter<Receipe>();
 Receipes: Receipe[] = [
   new Receipe("Test Receipe","Test description","https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg")
   , new Receipe("Test Receipe 2","Test description 2 ","https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg")
 
  ];
  constructor() { }

  ngOnInit() {
  }
  onReceipeSelected(receipe: Receipe)
  {
this.ReceipeWasSelected.emit(receipe);
  }
}
