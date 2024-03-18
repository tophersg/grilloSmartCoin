import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-calculadora-cripto',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule],
  templateUrl: './calculadora-cripto.component.html',
  styleUrl: './calculadora-cripto.component.css'
})
export class CalculadoraCriptoComponent {
  valorPositivo: boolean = false;
  alertaDiv: string = '';
  inversionMax: FormGroup;

  constructor(private form: FormBuilder) {
    this.inversionMax = this.form.group({
      invertido: [0],
      valorAccion: [0],
      valorFuturo: [0],
    });
  }

  ngOnInit(): void {

  }

  showSuccess() {
    console.log("Complete los campos!', 'Advertencia!")
    //this.toastr.warning('Complete los campos!', 'Advertencia!');
  }
  totalAganar: number = 0;

  ganancia: number = 0;
  // invertido: significa que es lo que nosotros vamos a invertir.
  // valorActual: se considera como el valor actual a la fecha, de la moneda o accion.
  // valorFuturo: se considera como el valor actual a la fecha, de la moneda o accion.
  calculcarTotal(invertido: number, valorActual: number, valorFuturo: number) {
    // cuantoGanare(a,b)=> a/b = totalComprando, ganare= totalCompradoxNuevoValorMoneda
    if (invertido && valorActual && valorFuturo) {
      this.totalAganar = invertido / valorActual;
      this.totalAganar = this.totalAganar * valorFuturo
      this.ganancia = this.totalAganar - invertido;
      if (this.ganancia > 0) {
        this.alertaDiv = 'row alert alert-success text-center '
      } else {
        this.alertaDiv = 'row alert alert-danger text-center '
      }
      this.valorPositivo = true;
    } else {
      this.showSuccess()
    }
    ;
  }
}
