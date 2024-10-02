import { Routes } from '@angular/router';

// ui
import { AppTrackingMoney } from './tracking-money/tracking-money.component';
import { GastoModule } from './gasto/gastos.module';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tracking-money',
        component: AppTrackingMoney,
      },
      {
        path: 'gastos',
        component: GastoModule,
      },
    ],
  },
];
