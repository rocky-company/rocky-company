import { Component, EventEmitter, Output } from '@angular/core';
import { GastoDTO } from 'src/app/services/baptiste/dto/gasto.dto';

@Component({
  selector: 'app-tracking-money-form',
  templateUrl: './tracking-money.form.component.html',
})
export class FormTrackingMoney {
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
    costoDelGasto: 0,
    fechaDelGasto: new Date(),
    categoria: '',
    lugar: '',
  };

  @Output() onSubmit = new EventEmitter<any>();

  addNewGasto() {
    this.onSubmit.emit(this.newGasto);

    console.log(this.newGasto);
  }
}

// formulario gastos.
interface Food {
  value: string;
  viewValue: string;
}
