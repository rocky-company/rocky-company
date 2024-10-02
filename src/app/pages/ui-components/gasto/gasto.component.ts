import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { GastosService } from 'src/app/services/baptiste/gastos.service';
import { SnackBarComponent } from 'src/app/snack-bar-component/snack-bar-component.component';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.html',
})
export class GastoComponent implements OnInit {
  gastoForm: FormGroup = this.fb.group({}); // Declarar el formulario aquí
  gasto: any = {}; // Variable para almacenar el gasto
  id: string | null = null; // ID del gasto

  constructor(
    private gastosService: GastosService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // Inicializar el formulario antes de cargar los datos
    this.gastoForm = this.fb.group({
      ID: ['', Validators.required],
      Nombre: ['', Validators.required], // Puedes agregar validaciones
      CostoDelGasto: ['', Validators.required],
      Categoria: ['', Validators.required],
      Lugar: ['', Validators.required],
      fecha_formateada: ['', Validators.required],
    });

    // Obtener el ID de la URL
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.gastosService.getGastoByID(this.id).subscribe((gasto) => {
        this.gasto = gasto;

        this.precargarFormulario();
      });
    }
  }

  // Método para precargar el formulario con los datos del gasto
  precargarFormulario() {
    if (this.gasto) {
      this.gastoForm.patchValue({
        ID: this.gasto.ID,
        Nombre: this.gasto.Nombre,
        CostoDelGasto: this.gasto.CostoDelGasto,
        Categoria: this.gasto.Categoria,
        Lugar: this.gasto.Lugar,
        fecha: this.gasto.fecha_formateada,
      });
    }
  }

  guardarInformacion() {
    this.gastosService.updateGasto(this.gastoForm.value).subscribe({
      next: (response) => {
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 3000,
          data: {
            message: 'Gasto actualizado en la base de datos.',
          },
        });

        this.router.navigate(['/ui-components/tracking-money']);
      },

      error: (error) => {
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 10000,
          data: {
            message: 'Error actualizado el gasto.',
          },
        });
      },
    });
  }
}
