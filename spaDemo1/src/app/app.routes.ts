import { Routes } from "@angular/router";
import { KidsComponent } from "./kids.component";
import { PantsComponent } from "./pants.component";
import { ShirtsComponent } from "./shirts.component";

export const appRoutes:Routes = [
    {path:"shirts",component:ShirtsComponent},
    {path:"pants",component:PantsComponent},
    {path:"kids",component:KidsComponent}
];

