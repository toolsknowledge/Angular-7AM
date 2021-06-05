import { productActions, ProductActionTypes } from "../actions/product.action";
import Product from "../modal/product.modal";

interface IState{
    loading:boolean;
    products:Product[];
    error:string;
}

const initialState:IState = {
    loading : false,
    products : [],
    error : ""
}

export default function productsReducer(state=initialState,action:ProductActionTypes):IState{
    switch(action.type){
        case productActions.GetProducts:
            return{
                ...state,
                loading:false,
                products:[],
                error:""
            }
        case productActions.GetProductsSuccess:
            return{
                ...state,
                products:action.products,
                error:"",
                loading:true
            }
        case productActions.GetProductsFail:
            return{
                ...state,
                products:[],
                error:action.error,
                loading:true
            }
    }
}