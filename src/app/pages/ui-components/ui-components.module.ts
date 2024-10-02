import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsRoutes } from './ui-components.routing';

// ui components
import { MatNativeDateModule } from '@angular/material/core';
import { AppTrackingMoney } from './tracking-money/tracking-money.component';
import { FormTrackingMoney } from './tracking-money/form-create/tracking-money.form.component';
import { GastoModule } from './gasto/gastos.module';

@NgModule({
  imports: [
    GastoModule,
    CommonModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ],
  declarations: [
    AppTrackingMoney,
    FormTrackingMoney,
  ],
})
export class UicomponentsModule {}
