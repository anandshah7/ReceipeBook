import { Component, OnInit , Input , EventEmitter, Output} from '@angular/core';
import { Receipe } from '../../Receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
 @Input() receipe: Receipe;
 @Output() SelectedReceipe = new EventEmitter<void> ();
  constructor() { }

  ngOnInit() {
  }
  onSelected() {
   this.SelectedReceipe.emit();
  }

}
