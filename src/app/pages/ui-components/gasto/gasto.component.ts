import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-gasto',
  templateUrl: './gasto.html',
})
export class GastoComponent implements OnInit {
  constructor(
    private gastosService: GastosService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtener el ID del gasto desde la url
    const ID = this.route.snapshot.paramMap.get('ID');
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
