import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../../shopping.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
@ViewChild('quantityInput', {static: false}) quantityInputRef: ElementRef;

constructor(private shoppingService: ShoppingService){}



  ngOnInit() {
  }
onAddItem()
{
  const inpName = this.nameInputRef.nativeElement.value;
  const intquant = this.quantityInputRef.nativeElement.value;
  const newingridient = new Ingredients(inpName, 11, intquant);
  this.shoppingService.addingridient(newingridient);
}

}
