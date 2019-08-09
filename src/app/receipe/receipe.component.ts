import { Component, OnInit } from '@angular/core';
import { Receipe } from './Receipe.model';
import { ReceipeService } from './receipe.service';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css'],
  providers: [ReceipeService]
})
export class ReceipeComponent implements OnInit {
selectedReceipe: Receipe;
  constructor(private receipeService: ReceipeService) { }

  ngOnInit() {
    this.receipeService.receipeSelected
    .subscribe((receipe: Receipe) => {
        this.selectedReceipe = receipe;
    });
  }

}
