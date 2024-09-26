import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-component',
  standalone: true,
  imports: [],
  templateUrl: './snack-bar-component.component.html',
  styleUrl: './snack-bar-component.component.scss'
})
export class SnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
