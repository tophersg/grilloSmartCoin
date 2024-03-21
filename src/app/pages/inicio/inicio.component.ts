import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraCriptoComponent } from '../calculadora-cripto/calculadora-cripto.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CriptosService } from '../../services/criptos.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableCryptoComponent } from '../table-crypto/table-crypto.component';
@Component({
  selector: 'app-inicio',
  standalone: true,
  providers:[CriptosService],
  imports: [CommonModule,
    CalculadoraCriptoComponent,
    TableCryptoComponent,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  public getData$!: Observable<any>;

  constructor() {}
  mostrarModulo2: boolean = false;
  mostrarModulo3: boolean = false;
  ngOnInit(): void {
  }
  
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
