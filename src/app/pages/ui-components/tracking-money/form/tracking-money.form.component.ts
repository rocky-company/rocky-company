import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GastoDTO } from 'src/app/services/baptiste/dto/gasto.dto';
import { GastosService } from 'src/app/services/baptiste/gastos.service';
import { SnackBarComponent } from 'src/app/snack-bar-component/snack-bar-component.component';

@Component({
  selector: 'app-tracking-money-form',
  templateUrl: './tracking-money.form.component.html',
})
export class FormTrackingMoney {
  constructor(
    private gastosService: GastosService,
    private snackBar: MatSnackBar,
  ) {}

  lugar: Food[] = [
    { value: 'steak-0', viewValue: 'Mexico' },
    { value: 'pizza-1', viewValue: 'Mumbai' },
    { value: 'tacos-2', viewValue: 'Tokyo' },
    { value: 'tacos-3', viewValue: 'New York' },
  ];
  selectedlugar = this.lugar[1].value;

  categoria: Food[] = [
    { value: 'steak-0', viewValue: 'Aseo' },
    { value: 'pizza-1', viewValue: 'Comida' },
    { value: 'tacos-2', viewValue: 'Galgerias' },
    { value: 'tacos-3', viewValue: 'Rocky' },
  ];
  selectedCategoria = this.categoria[3].value;

  newGasto: GastoDTO = {
    nombre: '',
    CostoDelGasto: 0,
    //FechaDelGasto: new Date(),
    Categoria: '',
    Lugar: '',
  };

  @Output() onSubmit = new EventEmitter<any>();

  addNewGasto() {
    this.onSubmit.emit(this.newGasto);
    console.log(this.newGasto);

    this.gastosService.crearGasto(this.newGasto).subscribe({
      next: (response) => {
        console.log('Respuesta del API Baptiste: ', response);

        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 2000,
          data: { message: `Registro agregado en la base de datos. :D` },
        });
      },

      error: (error) => {
        console.log('Error al consumir el API Baptiste: ', error);
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 10000,
          data: { message: `Error agregando el gasto. :(` },
        });
      },
    });
  }
}

// formulario gastos.
interface Food {
  value: string;
  viewValue: string;
}
