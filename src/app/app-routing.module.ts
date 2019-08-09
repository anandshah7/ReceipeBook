import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ReceipeComponent } from './receipe/receipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
const appRoutes: Routes = [
    { path: '' , redirectTo : '/receipes' , pathMatch: 'full'},
    { path: 'receipes', component: ReceipeComponent },
    { path: 'shopping-list', component: ShoppingComponent}
];


@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

 }