import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GastosDTO } from 'src/app/services/baptiste/dto/gastos.dto';
import { GastosService } from 'src/app/services/baptiste/gastos.service';
import { SnackBarComponent } from 'src/app/snack-bar-component/snack-bar-component.component';

@Component({
  selector: 'app-tracking-money',
  templateUrl: './tracking-money.component.html',
})
export class AppTrackingMoney implements OnInit {
  gastos: GastosDTO[] = [];

  constructor(private gastosService: GastosService, private snackBar: MatSnackBar,) {}

  ngOnInit(): void {
    this.gastosService.getAllGastos().subscribe({
      next: (response) => {
        this.gastos = response;
      },

      error: (error) => {
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 10000,
          data: { message: `Error consultando informacion. :(` },
        });
      },
    });
  }

  // Logica para mostrar formulario de creación.
  showForm = false;
  toggleForm() {
    this.showForm = !this.showForm; // Alterna la visibilidad del formulario
  }

  // Escucha el evento onSubmit emitido desde el subcomponente y actualiza el arreglo de gastos
  onGastoAdded(newGasto: GastosDTO) {
    this.gastos.push(newGasto);  // Añade el nuevo gasto al arreglo de gastos
  }

  // Logica para editar un gasto.
  edit(/* gasto: any */){
    console.log('Editando el siguiente gasto: ', /* gasto */);
  }

  // Nombre de cada columna en la tabla Gastos registrados.
  nombreFilas: string[] = [
    'ID',
    'Nombre',
    'CostoDelGasto',
    'Categoria',
    'Lugar',
    'fecha_formateada',
    'Acciones',
  ];
}
