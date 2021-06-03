//@ GET_PRODUCTS
//@ GET_PRODUCTS_SUCCESS
//@ GET_PRODUCTS_FAIL

import { Action } from "@ngrx/store";
import Product from "../modal/product.modal";


export enum productActions{
    GetProducts = "[Products] Loading",
    GetProductsSuccess = "[Products] Loading Success",
    GetProductsFail = "[Products] Loading Fail"
};


export class GetProducts implements Action{
    public readonly type = productActions.GetProducts;
};

export class GetProductsSuccess implements Action{
    public readonly type = productActions.GetProductsSuccess;
    constructor(public products:Product[]){}
};

export class GetProductsFail implements Action{
    public readonly type = productActions.GetProductsFail;
    constructor(public error:string){}
};

export type ProductActionTypes = GetProducts | GetProductsSuccess | GetProductsFail;






