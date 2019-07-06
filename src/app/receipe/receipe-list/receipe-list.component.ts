import { Component, OnInit} from '@angular/core';
import { Receipe } from '../Receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
 Receipes: Receipe[] ;
  constructor(private receipeservice: ReceipeService) {

   }

  ngOnInit() {
    this.Receipes = this.receipeservice.getReceipes();
  }
}
