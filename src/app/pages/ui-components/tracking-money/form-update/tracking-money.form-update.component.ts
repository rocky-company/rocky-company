import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GastoDTO } from 'src/app/services/baptiste/dto/gasto.dto';
import { GastosDTO } from 'src/app/services/baptiste/dto/gastos.dto';
import { GastosService } from 'src/app/services/baptiste/gastos.service';
import { SnackBarComponent } from 'src/app/snack-bar-component/snack-bar-component.component';

// formulario gastos.
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tracking-money-form-update',
  templateUrl: './tracking-money.form-update.component.html',
})
export class FormUpdateTrackingMoney {
  constructor(
    private gastosService: GastosService,
    private snackBar: MatSnackBar
  ) {}

  newGasto: GastoDTO = {
    nombre: '',
    CostoDelGasto: 0,
    Categoria: '',
    Lugar: '',
  };
  lugar: Food[] = [
    { value: 'steak-0', viewValue: 'Tienda D1' },
    { value: 'pizza-1', viewValue: 'Lider' },
    { value: 'tacos-2', viewValue: 'Ara' },
    { value: 'tacos-3', viewValue: 'Paso Lento' },
  ];

  categoria: Food[] = [
    { value: 'steak-0', viewValue: 'Aseo' },
    { value: 'pizza-1', viewValue: 'Comida' },
    { value: 'tacos-2', viewValue: 'Galgerias' },
    { value: 'tacos-3', viewValue: 'Rocky' },
  ];

  editGasto: GastosDTO = {
    ID: 0,
    Nombre: '',
    CostoDelGasto: 0,
    Categoria: '',
    Lugar: '',
  };

  @Output() editar = new EventEmitter<any>();
  updateGasto() {
    this.gastosService.updateGasto(this.editGasto).subscribe({
      next: (response) => {
        this.editar.emit(this.editGasto);
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 2000,
          data: {
            message: 'Gasto actualizado. :D',
          },
        });
      },

      error: (error) => {
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 10000,
          data: { message: `Error editando el gasto. :(` },
        });
      },
    })
  }
}
