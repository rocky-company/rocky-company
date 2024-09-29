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
  selector: 'app-tracking-money-form',
  templateUrl: './tracking-money.form.component.html',
})
export class FormTrackingMoney {
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
  @Output() onSubmit = new EventEmitter<any>();

  addNewGasto() {
    this.gastosService.crearGasto(this.newGasto).subscribe({
      next: (response) => {
        this.onSubmit.emit(this.newGasto);
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 2000,
          data: {
            message: `Registro agregado en la base de datos. :D`,
          },
        });
      },

      error: (error) => {
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 10000,
          data: { message: `Error agregando el gasto. :(` },
        });
      },
    });
  }

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
