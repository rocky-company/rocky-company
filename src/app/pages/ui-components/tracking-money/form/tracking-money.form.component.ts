import { Component, EventEmitter, Output } from '@angular/core';
import { GastoDTO } from 'src/app/services/baptiste/dto/gasto.dto';
import { GastosService } from 'src/app/services/baptiste/gastos.service';

@Component({
  selector: 'app-tracking-money-form',
  templateUrl: './tracking-money.form.component.html',
})
export class FormTrackingMoney {
  constructor(private gastosService: GastosService) {}

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
      },

      error: (error) => {
        console.log('Error al consumir el API Baptiste: ', error);
      }
    });
  }
}

// formulario gastos.
interface Food {
  value: string;
  viewValue: string;
}
