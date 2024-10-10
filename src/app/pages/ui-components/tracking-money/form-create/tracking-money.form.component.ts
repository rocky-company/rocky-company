import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GastoDTO } from 'src/app/services/baptiste/dto/gasto.dto';
import { GastosDTO } from 'src/app/services/baptiste/dto/gastos.dto';
import { GastosService } from 'src/app/services/baptiste/gastos.service';
import { SnackBarComponent } from 'src/app/snack-bar-component/snack-bar-component.component';
import { Categoria, Lugar } from './models/lugar.model';

@Component({
  selector: 'app-tracking-money-form',
  templateUrl: './tracking-money.form.component.html',
})
export class FormTrackingMoney {
categorias = Categoria;
lugares = Lugar;
  constructor(
    private gastosService: GastosService,
    private snackBar: MatSnackBar
  ) {}

  newGasto: GastoDTO = {
    nombre: '',
    costo_del_gasto: 0,
    categoria: '',
    lugar: '',
  };

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
    nombre: '',
    costo_del_gasto: 0,
    categoria: '',
    lugar: '',
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
    });
  }
}
