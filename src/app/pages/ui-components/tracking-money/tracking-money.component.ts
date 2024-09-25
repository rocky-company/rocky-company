import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking-money',
  templateUrl: './tracking-money.component.html',
})
export class AppTrackingMoney implements OnInit {
  constructor() {}

  // ngOnInit se ejecuta después de que Angular construya completamente el componente
  ngOnInit(): void {
    /*
      Este método se usa comúnmente para realizar tareas de inicialización, como cargar datos desde un servicio,
      configurar el componente o sus propiedades, y prepararlo para su uso.
    */
  }

  // Logica para mostrar formulario.
  showForm = false;
  toggleForm() {
    this.showForm = !this.showForm;  // Alterna la visibilidad del formulario
  }

  // Tabla gastos:
  displayedColumns1: string[] = ['assigned', 'name', 'priority', 'budget'];
  dataSource1 = PRODUCT_DATA;
}

// table gastos
export interface productsData {
  id: number;
  uname: string;
  budget: number;
  priority: string;
}
const PRODUCT_DATA: productsData[] = [
  {
    id: 1,
    uname: 'iPhone 13 pro max-Pacific Blue-128GB storage',
    budget: 180,
    priority: 'confirmed',
  },
  {
    id: 2,
    uname: 'Apple MacBook Pro 13 inch-M1-8/256GB-space',
    budget: 90,
    priority: 'cancelled',
  },
  {
    id: 3,
    uname: 'PlayStation 5 DualSense Wireless Controller',
    budget: 120,
    priority: 'rejected',
  },
  {
    id: 4,
    uname: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
    budget: 160,
    priority: 'confirmed',
  },
];
