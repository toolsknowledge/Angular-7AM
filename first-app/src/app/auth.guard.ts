import { Injectable } from "@angular/core";
@Injectable({
    providedIn:"root"
})
export default class authGuard{
    canLoad():boolean{
        return confirm("do you want to enter into module ??");
    };
};