//modal
//actions
//effects
//reducer

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import countriesComponent from "./countries.component";
import productsReducer from "./reducer/products.reducer";

//store  ========>     custom module  =====>  selector
//dispatch & subscribe     //countriesComponent

@NgModule({
    declarations:[countriesComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:countriesComponent}]),
             StoreModule.forRoot({"products":productsReducer}),
             EffectsModule.forRoot([EffectsModule])],

    providers:[],
    exports:[countriesComponent]
})
export default class countriesModule{}


