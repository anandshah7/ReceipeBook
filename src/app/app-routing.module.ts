import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ReceipeComponent } from './receipe/receipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ReceipeDetailComponent } from './receipe/receipe-detail/receipe-detail.component';
import { ReceipeEditComponent } from './receipe/receipe-list/receipe-item/recceipe-edit/receipeedt.component';
const appRoutes: Routes = [
    { path: '' , redirectTo : '/receipes' , pathMatch: 'full'},
    { path: 'receipes', component: ReceipeComponent , children: [
        { path: 'details/:id', component: ReceipeDetailComponent },
        { path: 'edit/:id' , component: ReceipeEditComponent}

    ] },
    { path: 'shopping-list', component: ShoppingComponent}
];


@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

 }