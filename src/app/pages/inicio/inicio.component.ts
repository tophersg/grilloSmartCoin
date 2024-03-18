import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraCriptoComponent } from '../calculadora-cripto/calculadora-cripto.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,
    CalculadoraCriptoComponent,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor() { }
  mostrarModulo2: boolean = false;
  mostrarModulo3: boolean = false;
  ngOnInit(): void {
  }

  // obtener() {
  //   this.prueba.obtenerValorDolarChile().toPromise().then((data: any) => {
  //   });
  //   // this.prueba.obtenerValorDolarChile().subscribe((data:any)=> {console.log(data)})
  // }
  mostrarModulo() {
    if (this.mostrarModulo2 == false) {

      this.mostrarModulo2 = true;;
    } else {

      this.mostrarModulo3 = true;

    }
  }
  ocultarModulo() {
    if (this.mostrarModulo3 == true) {

      this.mostrarModulo3 = false;
    } else {
      this.mostrarModulo2 = false;
    }
  }
}
