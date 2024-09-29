import { Routes } from '@angular/router';
import { FormUpdateTrackingMoney } from './form-update/tracking-money.form-update.component';
export const GastosRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path:'update',
        component: FormUpdateTrackingMoney,
      }
    ],
  }
];
