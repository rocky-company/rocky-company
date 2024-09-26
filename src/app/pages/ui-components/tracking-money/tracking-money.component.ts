import { Component, inject, OnInit } from '@angular/core';
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

  // ngOnInit se ejecuta después de que Angular construya completamente el componente
  ngOnInit(): void {
    /*
      Este método se usa comúnmente para realizar tareas de inicialización, como cargar datos desde un servicio,
      configurar el componente o sus propiedades, y prepararlo para su uso.
    */
    this.gastosService.getAllGastos().subscribe({
      next: (response) => {
        this.gastos = response;
      },

      error: (error) => {
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 10000,
          data: { message: `Error consultando informacion. :(` },
        });
        console.error('Error consultando informacion: ', error);
      },
    });
  }

  // Logica para mostrar formulario.
  showForm = false;
  toggleForm() {
    this.showForm = !this.showForm; // Alterna la visibilidad del formulario
  }

  // Nombre de cada columna en la tabla Gastos registrados.
  nombreFilas: string[] = [
    'ID',
    'Nombre',
    'CostoDelGasto',
    'Categoria',
    'Lugar',
    'FechaDelGasto',
  ];
}
