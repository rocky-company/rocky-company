import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { GastoRoutes } from "./gasto.routing";
import { GastoComponent } from "./gasto.component";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GastoRoutes),
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    GastoComponent
  ]
})
export class GastoModule {}
