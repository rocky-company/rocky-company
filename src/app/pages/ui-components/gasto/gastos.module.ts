import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { GastoRoutes } from "./gasto.routing";
import { GastoComponent } from "./gasto.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GastoRoutes),
    MatCardModule,
  ],
  declarations: [
    GastoComponent
  ]
})
export class GastoModule {}
