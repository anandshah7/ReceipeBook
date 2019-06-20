import { Component, OnInit, Input } from '@angular/core';
import { Receipe } from '../Receipe.model';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
@Input() receipe: Receipe;
  constructor() { }

  ngOnInit() {
  }

}
