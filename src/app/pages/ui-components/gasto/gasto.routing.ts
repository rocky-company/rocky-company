import { Routes } from "@angular/router";
import { GastoComponent } from "./gasto.component";

export const GastoRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'update/:id',
        component: GastoComponent,
      }
    ]
  }
]
