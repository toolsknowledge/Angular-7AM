//Effects
//implementaion of actions called as Effects
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import productsService from "../products.service";
import * as allActions from "../.";
import { catchError, mergeMap,map } from "rxjs/operators";
import Product from "../modal/product.modal";

@Injectable({
    providedIn:"root"
})
export default class productsEffect{
    constructor(private service:productsService,
                private actions:Actions){}

    @Effect()
    public getProducts:Observable<Action> = this.actions.pipe(
        ofType(allActions.productActions.GetProducts),
        mergeMap(()=>this.service.getProducts().pipe(map((posRes:Product[])=>{
            return new allActions.GetProductsSuccess(posRes)
        }),
        catchError((error)=>of(new allActions.GetProductsFail("Network Error")))))
    );           
};