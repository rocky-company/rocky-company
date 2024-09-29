import { NgModule } from "@angular/core";
import { FormUpdateTrackingMoney } from "./form-update/tracking-money.form-update.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { GastosRoutes } from "./gasto-component.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GastosRoutes),
  ],
  declarations: [
    FormUpdateTrackingMoney
  ],
})
export class GastoModule {}
