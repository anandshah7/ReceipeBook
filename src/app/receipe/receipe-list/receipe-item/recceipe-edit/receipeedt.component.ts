import { Component, OnInit, Output } from '@angular/core';
import { ReceipeService } from '../../../receipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Receipe } from 'src/app/receipe/Receipe.model';
@Component({
    selector: 'app-receipe-edit',
    templateUrl: './receipeedit.component.html',
    styles: ['./receipeedit.component.css' ]
})

export class ReceipeEditComponent implements OnInit {
receipeedit: Receipe;
    receipe: Receipe;
    constructor(private receipeService: ReceipeService, private route: Router, private activeRoute: ActivatedRoute ) { }

 ngOnInit() {
    this.receipeedit = this.receipeService.getReceipeById(+this.activeRoute.snapshot.params['id']);
 }
}